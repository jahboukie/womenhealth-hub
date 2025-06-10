import Anthropic from '@anthropic-ai/sdk'

const anthropic = process.env.ANTHROPIC_API_KEY
  ? new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    })
  : null

export interface DrAlexMessage {
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

export interface DrAlexConversation {
  id: string
  userId: string
  title: string
  messages: DrAlexMessage[]
  status: 'active' | 'archived' | 'completed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  tags: string[]
  providerReviewed: boolean
  createdAt: string
  updatedAt: string
}

const SYSTEM_PROMPT = `You are Dr. Alex AI, a compassionate and knowledgeable women's healthcare AI assistant. You are part of the WomenHealth.Health platform, designed to provide preliminary healthcare guidance and support.

IMPORTANT GUIDELINES:
1. You are NOT a replacement for professional medical care
2. Always encourage users to consult with healthcare providers for serious concerns
3. Focus on women's health issues including menopause, reproductive health, mental health
4. Be empathetic, supportive, and non-judgmental
5. Provide evidence-based information when possible
6. If symptoms suggest urgency, recommend immediate medical attention
7. Respect privacy and maintain HIPAA-compliant conversations
8. Integrate with the ecosystem apps when relevant (MenoWellness, SupportPartner, etc.)

CAPABILITIES:
- Symptom assessment and guidance
- Menopause support and education
- Mental health screening and resources
- Medication information and interactions
- Lifestyle recommendations
- Partner communication guidance
- Healthcare navigation assistance

Remember: You're here to support and guide, not diagnose or treat.`

export async function generateDrAlexResponse(
  messages: DrAlexMessage[],
  userContext?: {
    age?: number
    medicalHistory?: string[]
    currentMedications?: string[]
    allergies?: string[]
  }
): Promise<{
  response: string
  metadata: {
    urgency: 'low' | 'medium' | 'high' | 'urgent'
    followUpRequired: boolean
    providerNotification: boolean
    symptoms: string[]
    suggestedApps: string[]
  }
}> {
  try {
    // Demo mode if no API key
    if (!anthropic) {
      const userMessage = messages[messages.length - 1]?.content || ''
      const demoResponse = generateDemoResponse(userMessage)
      const metadata = analyzeResponseMetadata(demoResponse, userMessage)

      return {
        response: demoResponse,
        metadata,
      }
    }

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map(msg => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }))

    // Add user context if available
    let contextPrompt = ''
    if (userContext) {
      contextPrompt = `
User Context:
- Age: ${userContext.age || 'Not provided'}
- Medical History: ${userContext.medicalHistory?.join(', ') || 'None provided'}
- Current Medications: ${userContext.currentMedications?.join(', ') || 'None provided'}
- Allergies: ${userContext.allergies?.join(', ') || 'None provided'}
`
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1000,
      temperature: 0.7,
      system: SYSTEM_PROMPT + contextPrompt,
      messages: anthropicMessages,
    })

    const responseText = response.content[0].type === 'text'
      ? response.content[0].text
      : 'I apologize, but I encountered an error processing your message.'

    // Analyze response for metadata
    const metadata = analyzeResponseMetadata(responseText, messages[messages.length - 1]?.content || '')

    return {
      response: responseText,
      metadata,
    }

  } catch (error) {
    console.error('Dr. Alex AI Error:', error)
    throw new Error('Failed to generate response from Dr. Alex AI')
  }
}

function analyzeResponseMetadata(response: string, userMessage: string): {
  urgency: 'low' | 'medium' | 'high' | 'urgent'
  followUpRequired: boolean
  providerNotification: boolean
  symptoms: string[]
  suggestedApps: string[]
} {
  const lowerResponse = response.toLowerCase()
  const lowerUserMessage = userMessage.toLowerCase()

  // Determine urgency based on keywords
  let urgency: 'low' | 'medium' | 'high' | 'urgent' = 'low'
  
  const urgentKeywords = ['emergency', 'urgent', 'severe pain', 'chest pain', 'difficulty breathing', 'bleeding heavily']
  const highKeywords = ['concerning', 'worrying', 'see a doctor soon', 'medical attention']
  const mediumKeywords = ['monitor', 'track', 'follow up', 'discuss with provider']

  if (urgentKeywords.some(keyword => lowerResponse.includes(keyword) || lowerUserMessage.includes(keyword))) {
    urgency = 'urgent'
  } else if (highKeywords.some(keyword => lowerResponse.includes(keyword))) {
    urgency = 'high'
  } else if (mediumKeywords.some(keyword => lowerResponse.includes(keyword))) {
    urgency = 'medium'
  }

  // Extract symptoms
  const commonSymptoms = [
    'hot flashes', 'night sweats', 'mood swings', 'irregular periods', 'fatigue',
    'headache', 'nausea', 'pain', 'bleeding', 'discharge', 'cramping',
    'anxiety', 'depression', 'insomnia', 'weight gain', 'joint pain'
  ]
  
  const symptoms = commonSymptoms.filter(symptom => 
    lowerUserMessage.includes(symptom) || lowerResponse.includes(symptom)
  )

  // Suggest relevant apps
  const suggestedApps: string[] = []
  if (symptoms.some(s => ['hot flashes', 'night sweats', 'irregular periods'].includes(s))) {
    suggestedApps.push('menowellness')
  }
  if (symptoms.some(s => ['anxiety', 'depression', 'mood swings'].includes(s))) {
    suggestedApps.push('supportpartner')
  }

  return {
    urgency,
    followUpRequired: urgency !== 'low',
    providerNotification: urgency === 'urgent' || urgency === 'high',
    symptoms,
    suggestedApps,
  }
}

function generateDemoResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Hello! I'm Dr. Alex AI, your healthcare assistant. I'm currently running in demo mode since the Anthropic API isn't configured yet. How can I help you with your health concerns today?"
  }

  if (lowerMessage.includes('hot flash') || lowerMessage.includes('menopause')) {
    return "I understand you're experiencing symptoms that may be related to menopause. Hot flashes are very common and can be managed through various approaches including lifestyle changes, hormone therapy, and other treatments. I'd recommend tracking your symptoms in MenoWellness and discussing options with your healthcare provider. Note: This is a demo response - configure the Anthropic API for full AI functionality."
  }

  if (lowerMessage.includes('pain') || lowerMessage.includes('hurt')) {
    return "I'm sorry to hear you're experiencing pain. While I can provide general information, it's important to have persistent or severe pain evaluated by a healthcare professional. Can you tell me more about the location, duration, and severity of your pain? Note: This is a demo response - configure the Anthropic API for full AI functionality."
  }

  if (lowerMessage.includes('anxiety') || lowerMessage.includes('stress')) {
    return "Anxiety and stress are common concerns that can significantly impact your well-being. There are many effective strategies including mindfulness, exercise, therapy, and sometimes medication. I'd recommend speaking with a mental health professional for personalized guidance. The SupportPartner app in our ecosystem can also provide valuable resources. Note: This is a demo response - configure the Anthropic API for full AI functionality."
  }

  return `Thank you for your question about "${userMessage}". I'm currently running in demo mode since the Anthropic API isn't configured yet. In full mode, I would provide personalized healthcare guidance based on your specific situation and medical history. To enable full AI functionality, please add your Anthropic API key to the environment variables. For now, I recommend consulting with your healthcare provider for any specific medical concerns.`
}
