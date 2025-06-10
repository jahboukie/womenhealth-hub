import { createClient } from '@/lib/supabase/server'
import { generateDrAlexResponse, DrAlexMessage } from '@/lib/dr-alex-ai'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'

const chatSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
  conversationId: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, conversationId } = chatSchema.parse(body)

    const supabase = await createClient()

    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Get user profile for context
    const { data: userProfile } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()

    const { data: userData } = await supabase
      .from('users')
      .select('date_of_birth')
      .eq('id', user.id)
      .single()

    // Calculate age if date of birth is available
    let age: number | undefined
    if (userData?.date_of_birth) {
      const birthDate = new Date(userData.date_of_birth)
      const today = new Date()
      age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
    }

    let conversation
    let messages: DrAlexMessage[] = []

    if (conversationId) {
      // Get existing conversation
      const { data: existingConversation, error: convError } = await supabase
        .from('dr_alex_conversations')
        .select('*')
        .eq('id', conversationId)
        .eq('user_id', user.id)
        .single()

      if (convError || !existingConversation) {
        return NextResponse.json(
          { error: 'Conversation not found' },
          { status: 404 }
        )
      }

      conversation = existingConversation
      messages = existingConversation.messages || []
    } else {
      // Create new conversation
      const newConversationId = uuidv4()
      const { data: newConversation, error: createError } = await supabase
        .from('dr_alex_conversations')
        .insert({
          id: newConversationId,
          user_id: user.id,
          title: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
          messages: [],
          status: 'active',
          priority: 'low',
          tags: [],
          provider_reviewed: false,
        })
        .select()
        .single()

      if (createError || !newConversation) {
        return NextResponse.json(
          { error: 'Failed to create conversation' },
          { status: 500 }
        )
      }

      conversation = newConversation
    }

    // Add user message
    const userMessage: DrAlexMessage = {
      id: uuidv4(),
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
    }

    messages.push(userMessage)

    // Generate AI response
    const userContext = {
      age,
      medicalHistory: userProfile?.medical_history || [],
      currentMedications: userProfile?.current_medications || [],
      allergies: userProfile?.allergies || [],
    }

    const { response, metadata } = await generateDrAlexResponse(messages, userContext)

    // Add AI response
    const aiMessage: DrAlexMessage = {
      id: uuidv4(),
      role: 'assistant',
      content: response,
      timestamp: new Date().toISOString(),
      metadata,
    }

    messages.push(aiMessage)

    // Update conversation
    const { error: updateError } = await supabase
      .from('dr_alex_conversations')
      .update({
        messages,
        priority: metadata.urgency,
        last_message_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: metadata.symptoms,
      })
      .eq('id', conversation.id)

    if (updateError) {
      console.error('Failed to update conversation:', updateError)
      return NextResponse.json(
        { error: 'Failed to save conversation' },
        { status: 500 }
      )
    }

    // If provider notification is needed, create a notification
    if (metadata.providerNotification) {
      // TODO: Implement provider notification system
      console.log('Provider notification needed for conversation:', conversation.id)
    }

    return NextResponse.json({
      conversationId: conversation.id,
      message: aiMessage,
      metadata,
      suggestedApps: metadata.suggestedApps,
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Dr. Alex chat error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
