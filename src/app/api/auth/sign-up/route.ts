import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  role: z.enum(['patient', 'provider']).default('patient'),
  dateOfBirth: z.string().optional(),
  phoneNumber: z.string().optional(),
  hipaaConsent: z.boolean().default(false),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = signUpSchema.parse(body)

    const supabase = await createClient()

    // Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: validatedData.email,
      password: validatedData.password,
      options: {
        data: {
          full_name: validatedData.fullName,
          role: validatedData.role,
        },
      },
    })

    if (authError) {
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      )
    }

    // If user was created, create their profile
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,
          email: validatedData.email,
          full_name: validatedData.fullName,
          role: validatedData.role,
          date_of_birth: validatedData.dateOfBirth || null,
          phone_number: validatedData.phoneNumber || null,
          hipaa_consent: validatedData.hipaaConsent,
          is_active: true,
        })

      if (profileError) {
        console.error('Profile creation error:', profileError)
        // Don't fail the signup if profile creation fails
      }

      // Create user profile record
      const { error: userProfileError } = await supabase
        .from('user_profiles')
        .insert({
          user_id: authData.user.id,
          preferred_language: 'en',
          timezone: 'America/New_York',
          notification_preferences: {
            email: true,
            sms: false,
            push: true,
          },
          privacy_settings: {
            shareDataWithProviders: true,
            allowResearch: false,
            marketingEmails: false,
          },
        })

      if (userProfileError) {
        console.error('User profile creation error:', userProfileError)
      }
    }

    return NextResponse.json({
      message: 'User created successfully. Please check your email to verify your account.',
      user: authData.user,
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Sign up error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
