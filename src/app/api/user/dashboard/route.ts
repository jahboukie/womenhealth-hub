import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

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

    // Get user profile
    const { data: userProfile } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()

    const { data: userDetails } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()

    // Get recent Dr. Alex conversations
    const { data: recentConversations } = await supabase
      .from('dr_alex_conversations')
      .select('id, title, status, priority, created_at, last_message_at')
      .eq('user_id', user.id)
      .order('last_message_at', { ascending: false })
      .limit(5)

    // Get recent symptoms (if MenoWellness is active)
    const { data: recentSymptoms } = await supabase
      .from('menowellness_symptoms')
      .select('type, severity, timestamp')
      .eq('user_id', user.id)
      .order('timestamp', { ascending: false })
      .limit(10)

    // Calculate health insights
    const healthInsights = await calculateHealthInsights(user.id, supabase)

    // Get app usage statistics
    const appStats = await getAppUsageStats(user.id, supabase)

    // Get upcoming appointments (placeholder for future integration)
    const upcomingAppointments: any[] = []

    // Get recent notifications
    const { data: notifications } = await supabase
      .from('user_notifications')
      .select('*')
      .eq('user_id', user.id)
      .eq('read', false)
      .order('created_at', { ascending: false })
      .limit(10)

    return NextResponse.json({
      user: {
        ...userProfile,
        profile: userDetails,
      },
      dashboard: {
        healthInsights,
        recentConversations: recentConversations || [],
        recentSymptoms: recentSymptoms || [],
        appStats,
        upcomingAppointments,
        notifications: notifications || [],
      },
    })

  } catch (error) {
    console.error('Dashboard error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function calculateHealthInsights(userId: string, supabase: any) {
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  // Get symptoms from last 30 days
  const { data: symptoms } = await supabase
    .from('menowellness_symptoms')
    .select('*')
    .eq('user_id', userId)
    .gte('timestamp', thirtyDaysAgo.toISOString())

  // Get conversations from last 30 days
  const { data: conversations } = await supabase
    .from('dr_alex_conversations')
    .select('priority, created_at')
    .eq('user_id', userId)
    .gte('created_at', thirtyDaysAgo.toISOString())

  const insights = []

  if (symptoms && symptoms.length > 0) {
    const avgSeverity = symptoms.reduce((sum: number, s: any) => sum + s.severity, 0) / symptoms.length
    
    if (avgSeverity > 6) {
      insights.push({
        type: 'symptom_severity',
        title: 'Symptom Management',
        message: 'Your average symptom severity has been elevated. Consider discussing management strategies with Dr. Alex AI.',
        priority: 'medium',
        action: 'chat_with_dr_alex',
      })
    }

    // Check for patterns
    const symptomTypes = symptoms.reduce((acc: any, s: any) => {
      acc[s.type] = (acc[s.type] || 0) + 1
      return acc
    }, {})

    const mostCommon = Object.entries(symptomTypes).sort(([,a]: any, [,b]: any) => b - a)[0]
    if (mostCommon && (mostCommon[1] as number) > 5) {
      insights.push({
        type: 'symptom_pattern',
        title: 'Symptom Pattern Detected',
        message: `You've frequently logged ${mostCommon[0].replace('_', ' ')}. MenoWellness can help track triggers and patterns.`,
        priority: 'low',
        action: 'open_menowellness',
      })
    }
  }

  if (conversations && conversations.some((c: any) => c.priority === 'high' || c.priority === 'urgent')) {
    insights.push({
      type: 'high_priority_conversation',
      title: 'Follow-up Recommended',
      message: 'You have high-priority conversations that may need follow-up with a healthcare provider.',
      priority: 'high',
      action: 'view_conversations',
    })
  }

  // Wellness recommendations
  if (!symptoms || symptoms.length === 0) {
    insights.push({
      type: 'wellness_tracking',
      title: 'Start Tracking Your Health',
      message: 'Begin logging symptoms and patterns to get personalized insights and recommendations.',
      priority: 'low',
      action: 'start_tracking',
    })
  }

  return insights
}

async function getAppUsageStats(userId: string, supabase: any) {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  // Get conversation count
  const { count: conversationCount } = await supabase
    .from('dr_alex_conversations')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .gte('created_at', thirtyDaysAgo.toISOString())

  // Get symptom logs count
  const { count: symptomCount } = await supabase
    .from('menowellness_symptoms')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .gte('timestamp', thirtyDaysAgo.toISOString())

  return {
    drAlexConversations: conversationCount || 0,
    symptomLogs: symptomCount || 0,
    activeApps: [
      ...(conversationCount && conversationCount > 0 ? ['dr-alex-ai'] : []),
      ...(symptomCount && symptomCount > 0 ? ['menowellness'] : []),
    ],
    engagementScore: calculateEngagementScore(conversationCount || 0, symptomCount || 0),
  }
}

function calculateEngagementScore(conversations: number, symptoms: number): number {
  // Simple engagement score calculation
  const conversationScore = Math.min(conversations * 10, 50) // Max 50 points for conversations
  const symptomScore = Math.min(symptoms * 2, 50) // Max 50 points for symptom tracking
  
  return Math.min(conversationScore + symptomScore, 100)
}
