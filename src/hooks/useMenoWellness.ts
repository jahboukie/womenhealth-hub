'use client'

import { useState, useCallback } from 'react'

export interface Symptom {
  id?: string
  type: 'hot_flash' | 'night_sweat' | 'mood_swing' | 'sleep_disturbance' | 
        'irregular_period' | 'fatigue' | 'joint_pain' | 'brain_fog' | 
        'weight_gain' | 'decreased_libido' | 'vaginal_dryness' | 
        'headache' | 'anxiety' | 'depression' | 'other'
  severity: number // 1-10
  duration?: number // in minutes
  notes?: string
  triggers?: string[]
  timestamp?: string
}

export interface SymptomAnalytics {
  totalSymptoms30Days: number
  totalSymptoms7Days: number
  mostCommonSymptom: string | null
  averageSeverity: number
  symptomCounts: Record<string, number>
  trends: {
    severity: 'increasing' | 'decreasing' | 'stable'
    frequency: 'increasing' | 'decreasing' | 'stable'
  }
}

export interface SymptomAlert {
  type: string
  message: string
  priority: 'low' | 'medium' | 'high'
}

export function useMenoWellness() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const logSymptom = useCallback(async (symptom: Symptom): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/apps/menowellness/symptoms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(symptom),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to log symptom')
      }

      // Handle any alerts
      if (result.alerts && result.alerts.length > 0) {
        // You could show these alerts in a toast or notification
        console.log('Symptom alerts:', result.alerts)
      }

      return true
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to log symptom'
      setError(errorMessage)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  const logMultipleSymptoms = useCallback(async (symptoms: Symptom[]): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/apps/menowellness/symptoms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(symptoms),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to log symptoms')
      }

      return true
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to log symptoms'
      setError(errorMessage)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  const getSymptoms = useCallback(async (options?: {
    startDate?: string
    endDate?: string
    type?: string
    limit?: number
  }): Promise<{
    symptoms: Symptom[]
    analytics: SymptomAnalytics
    totalCount: number
  } | null> => {
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams()
      if (options?.startDate) params.append('startDate', options.startDate)
      if (options?.endDate) params.append('endDate', options.endDate)
      if (options?.type) params.append('type', options.type)
      if (options?.limit) params.append('limit', options.limit.toString())

      const response = await fetch(`/api/apps/menowellness/symptoms?${params}`)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch symptoms')
      }

      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch symptoms'
      setError(errorMessage)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const getSymptomInsights = useCallback(async (): Promise<{
    patterns: any[]
    recommendations: string[]
    riskFactors: string[]
  } | null> => {
    try {
      const response = await fetch('/api/apps/menowellness/insights')
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch insights')
      }

      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch insights'
      setError(errorMessage)
      return null
    }
  }, [])

  const exportSymptomData = useCallback(async (format: 'csv' | 'pdf' = 'csv'): Promise<Blob | null> => {
    try {
      const response = await fetch(`/api/apps/menowellness/export?format=${format}`)

      if (!response.ok) {
        throw new Error('Failed to export data')
      }

      return await response.blob()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to export data'
      setError(errorMessage)
      return null
    }
  }, [])

  return {
    logSymptom,
    logMultipleSymptoms,
    getSymptoms,
    getSymptomInsights,
    exportSymptomData,
    loading,
    error,
  }
}
