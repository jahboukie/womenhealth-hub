'use client'

import { useState, useCallback } from 'react'

interface DrAlexMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  metadata?: {
    symptoms?: string[]
    urgency?: 'low' | 'medium' | 'high' | 'urgent'
    followUpRequired?: boolean
    providerNotification?: boolean
  }
}

interface ChatResponse {
  conversationId: string
  message: DrAlexMessage
  metadata: {
    urgency: 'low' | 'medium' | 'high' | 'urgent'
    followUpRequired: boolean
    providerNotification: boolean
    symptoms: string[]
    suggestedApps: string[]
  }
  suggestedApps: string[]
}

export function useDrAlex() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(async (
    message: string,
    conversationId?: string
  ): Promise<ChatResponse | null> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/dr-alex/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationId,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      return result as ChatResponse
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message'
      setError(errorMessage)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const getConversations = useCallback(async () => {
    try {
      const response = await fetch('/api/dr-alex/conversations')
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch conversations')
      }

      return result.conversations
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch conversations'
      setError(errorMessage)
      return []
    }
  }, [])

  const getConversation = useCallback(async (conversationId: string) => {
    try {
      const response = await fetch(`/api/dr-alex/conversations/${conversationId}`)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch conversation')
      }

      return result.conversation
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch conversation'
      setError(errorMessage)
      return null
    }
  }, [])

  const archiveConversation = useCallback(async (conversationId: string) => {
    try {
      const response = await fetch(`/api/dr-alex/conversations/${conversationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'archived',
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to archive conversation')
      }

      return true
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to archive conversation'
      setError(errorMessage)
      return false
    }
  }, [])

  return {
    sendMessage,
    getConversations,
    getConversation,
    archiveConversation,
    loading,
    error,
  }
}
