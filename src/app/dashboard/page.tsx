'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useDrAlex } from '@/hooks/useDrAlex'
import { useMenoWellness } from '@/hooks/useMenoWellness'
import Layout from '@/components/layout/Layout'
import { useRouter } from 'next/navigation'

interface DashboardData {
  user: any
  dashboard: {
    healthInsights: any[]
    recentConversations: any[]
    recentSymptoms: any[]
    appStats: any
    upcomingAppointments: any[]
    notifications: any[]
  }
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth()
  const { sendMessage, loading: drAlexLoading } = useDrAlex()
  const { logSymptom, loading: menoLoading } = useMenoWellness()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [chatMessage, setChatMessage] = useState('')
  const [chatResponse, setChatResponse] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/')
      return
    }

    if (user) {
      fetchDashboardData()
    }
  }, [user, authLoading, router])

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/user/dashboard')
      if (response.ok) {
        const data = await response.json()
        setDashboardData(data)
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatMessage.trim()) return

    const response = await sendMessage(chatMessage)
    if (response) {
      setChatResponse(response.message.content)
      setChatMessage('')
      // Refresh dashboard data to show new conversation
      fetchDashboardData()
    }
  }

  const handleSymptomLog = async () => {
    const success = await logSymptom({
      type: 'hot_flash',
      severity: 7,
      notes: 'Demo symptom from dashboard',
    })

    if (success) {
      // Refresh dashboard data
      fetchDashboardData()
    }
  }

  if (authLoading || loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your dashboard...</p>
          </div>
        </div>
      </Layout>
    )
  }

  if (!user) {
    return null // Will redirect
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {dashboardData?.user?.full_name || user.email}!
            </h1>
            <p className="text-gray-600 mt-2">
              Your personalized healthcare dashboard
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Dr. Alex Conversations</h3>
              <p className="text-2xl font-bold text-blue-600">
                {dashboardData?.dashboard.appStats?.drAlexConversations || 0}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Symptoms Logged</h3>
              <p className="text-2xl font-bold text-pink-600">
                {dashboardData?.dashboard.appStats?.symptomLogs || 0}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Engagement Score</h3>
              <p className="text-2xl font-bold text-green-600">
                {dashboardData?.dashboard.appStats?.engagementScore || 0}%
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Active Apps</h3>
              <p className="text-2xl font-bold text-purple-600">
                {dashboardData?.dashboard.appStats?.activeApps?.length || 0}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dr. Alex AI Chat Demo */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Chat with Dr. Alex AI</h2>
                <p className="text-gray-600 text-sm mt-1">Ask a health question to test the AI integration</p>
              </div>
              <div className="p-6">
                <form onSubmit={handleChatSubmit} className="space-y-4">
                  <div>
                    <textarea
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Ask Dr. Alex about your health concerns..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={drAlexLoading || !chatMessage.trim()}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {drAlexLoading ? 'Asking Dr. Alex...' : 'Send Message'}
                  </button>
                </form>

                {chatResponse && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-md">
                    <h4 className="font-medium text-blue-900 mb-2">Dr. Alex AI Response:</h4>
                    <p className="text-blue-800 text-sm">{chatResponse}</p>
                  </div>
                )}
              </div>
            </div>

            {/* MenoWellness Demo */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">MenoWellness Tracking</h2>
                <p className="text-gray-600 text-sm mt-1">Log symptoms and track patterns</p>
              </div>
              <div className="p-6">
                <button
                  onClick={handleSymptomLog}
                  disabled={menoLoading}
                  className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                >
                  {menoLoading ? 'Logging...' : 'Log Demo Hot Flash (Severity 7)'}
                </button>

                {dashboardData?.dashboard.recentSymptoms && dashboardData.dashboard.recentSymptoms.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Recent Symptoms:</h4>
                    <div className="space-y-2">
                      {dashboardData.dashboard.recentSymptoms.slice(0, 3).map((symptom: any, index: number) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-sm text-gray-700 capitalize">
                            {symptom.type.replace('_', ' ')}
                          </span>
                          <span className="text-sm font-medium text-pink-600">
                            Severity: {symptom.severity}/10
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Health Insights */}
          {dashboardData?.dashboard.healthInsights && dashboardData.dashboard.healthInsights.length > 0 && (
            <div className="mt-8 bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Health Insights</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {dashboardData.dashboard.healthInsights.map((insight: any, index: number) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900">{insight.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{insight.message}</p>
                      <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                        insight.priority === 'high' ? 'bg-red-100 text-red-800' :
                        insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {insight.priority} priority
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
