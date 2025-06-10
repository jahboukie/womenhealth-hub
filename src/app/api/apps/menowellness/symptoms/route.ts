import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const symptomSchema = z.object({
  type: z.enum([
    'hot_flash',
    'night_sweat',
    'mood_swing',
    'sleep_disturbance',
    'irregular_period',
    'fatigue',
    'joint_pain',
    'brain_fog',
    'weight_gain',
    'decreased_libido',
    'vaginal_dryness',
    'headache',
    'anxiety',
    'depression',
    'other'
  ]),
  severity: z.number().min(1).max(10),
  duration: z.number().optional(), // in minutes
  notes: z.string().optional(),
  triggers: z.array(z.string()).optional(),
  timestamp: z.string().optional(),
})

const symptomsArraySchema = z.array(symptomSchema)

// GET - Retrieve user's symptom history
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const symptomType = searchParams.get('type')
    const limit = parseInt(searchParams.get('limit') || '100')

    let query = supabase
      .from('menowellness_symptoms')
      .select('*')
      .eq('user_id', user.id)
      .order('timestamp', { ascending: false })
      .limit(limit)

    if (startDate) {
      query = query.gte('timestamp', startDate)
    }
    if (endDate) {
      query = query.lte('timestamp', endDate)
    }
    if (symptomType) {
      query = query.eq('type', symptomType)
    }

    const { data: symptoms, error } = await query

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch symptoms' },
        { status: 500 }
      )
    }

    // Calculate analytics
    const analytics = calculateSymptomAnalytics(symptoms || [])

    return NextResponse.json({
      symptoms: symptoms || [],
      analytics,
      totalCount: symptoms?.length || 0,
    })

  } catch (error) {
    console.error('Get symptoms error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Log new symptoms
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const symptoms = Array.isArray(body) ? symptomsArraySchema.parse(body) : [symptomSchema.parse(body)]

    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Prepare symptoms for insertion
    const symptomsToInsert = symptoms.map(symptom => ({
      user_id: user.id,
      type: symptom.type,
      severity: symptom.severity,
      duration: symptom.duration,
      notes: symptom.notes,
      triggers: symptom.triggers,
      timestamp: symptom.timestamp || new Date().toISOString(),
      created_at: new Date().toISOString(),
    }))

    const { data: insertedSymptoms, error: insertError } = await supabase
      .from('menowellness_symptoms')
      .insert(symptomsToInsert)
      .select()

    if (insertError) {
      return NextResponse.json(
        { error: 'Failed to log symptoms' },
        { status: 500 }
      )
    }

    // Check if we should trigger any alerts or recommendations
    const alerts = await checkSymptomAlerts(user.id, symptoms, supabase)

    return NextResponse.json({
      message: 'Symptoms logged successfully',
      symptoms: insertedSymptoms,
      alerts,
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Log symptoms error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function calculateSymptomAnalytics(symptoms: any[]) {
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  const recentSymptoms = symptoms.filter(s => new Date(s.timestamp) >= thirtyDaysAgo)
  const weeklySymptoms = symptoms.filter(s => new Date(s.timestamp) >= sevenDaysAgo)

  const symptomCounts = recentSymptoms.reduce((acc, symptom) => {
    acc[symptom.type] = (acc[symptom.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const averageSeverity = recentSymptoms.length > 0
    ? recentSymptoms.reduce((sum, s) => sum + s.severity, 0) / recentSymptoms.length
    : 0

  return {
    totalSymptoms30Days: recentSymptoms.length,
    totalSymptoms7Days: weeklySymptoms.length,
    mostCommonSymptom: Object.entries(symptomCounts).sort(([,a], [,b]) => (b as number) - (a as number))[0]?.[0] || null,
    averageSeverity: Math.round(averageSeverity * 10) / 10,
    symptomCounts,
    trends: calculateTrends(symptoms),
  }
}

function calculateTrends(symptoms: any[]) {
  // Simple trend calculation - compare last 2 weeks vs previous 2 weeks
  const now = new Date()
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const fourWeeksAgo = new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000)

  const recent = symptoms.filter(s => new Date(s.timestamp) >= twoWeeksAgo)
  const previous = symptoms.filter(s => {
    const date = new Date(s.timestamp)
    return date >= fourWeeksAgo && date < twoWeeksAgo
  })

  const recentAvg = recent.length > 0 ? recent.reduce((sum, s) => sum + s.severity, 0) / recent.length : 0
  const previousAvg = previous.length > 0 ? previous.reduce((sum, s) => sum + s.severity, 0) / previous.length : 0

  return {
    severity: recentAvg > previousAvg ? 'increasing' : recentAvg < previousAvg ? 'decreasing' : 'stable',
    frequency: recent.length > previous.length ? 'increasing' : recent.length < previous.length ? 'decreasing' : 'stable',
  }
}

async function checkSymptomAlerts(userId: string, symptoms: any[], supabase: any) {
  const alerts = []

  // Check for severe symptoms
  const severeSymptoms = symptoms.filter(s => s.severity >= 8)
  if (severeSymptoms.length > 0) {
    alerts.push({
      type: 'severe_symptoms',
      message: 'You\'ve logged severe symptoms. Consider discussing with your healthcare provider.',
      priority: 'high',
    })
  }

  // Check for frequent hot flashes
  const hotFlashes = symptoms.filter(s => s.type === 'hot_flash')
  if (hotFlashes.length >= 5) {
    alerts.push({
      type: 'frequent_hot_flashes',
      message: 'Frequent hot flashes detected. MenoWellness can help track patterns and suggest management strategies.',
      priority: 'medium',
    })
  }

  return alerts
}
