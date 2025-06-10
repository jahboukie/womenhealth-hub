export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'patient' | 'provider' | 'admin'
          created_at: string
          updated_at: string
          last_sign_in_at: string | null
          is_active: boolean
          hipaa_consent: boolean
          date_of_birth: string | null
          phone_number: string | null
          emergency_contact: string | null
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'patient' | 'provider' | 'admin'
          created_at?: string
          updated_at?: string
          last_sign_in_at?: string | null
          is_active?: boolean
          hipaa_consent?: boolean
          date_of_birth?: string | null
          phone_number?: string | null
          emergency_contact?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'patient' | 'provider' | 'admin'
          created_at?: string
          updated_at?: string
          last_sign_in_at?: string | null
          is_active?: boolean
          hipaa_consent?: boolean
          date_of_birth?: string | null
          phone_number?: string | null
          emergency_contact?: string | null
        }
      }
      user_profiles: {
        Row: {
          id: string
          user_id: string
          medical_history: any | null
          current_medications: any | null
          allergies: any | null
          insurance_info: any | null
          preferred_language: string
          timezone: string
          notification_preferences: any | null
          privacy_settings: any | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          medical_history?: any | null
          current_medications?: any | null
          allergies?: any | null
          insurance_info?: any | null
          preferred_language?: string
          timezone?: string
          notification_preferences?: any | null
          privacy_settings?: any | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          medical_history?: any | null
          current_medications?: any | null
          allergies?: any | null
          insurance_info?: any | null
          preferred_language?: string
          timezone?: string
          notification_preferences?: any | null
          privacy_settings?: any | null
          created_at?: string
          updated_at?: string
        }
      }
      dr_alex_conversations: {
        Row: {
          id: string
          user_id: string
          title: string
          messages: any[]
          status: 'active' | 'archived' | 'completed'
          created_at: string
          updated_at: string
          last_message_at: string
          tags: string[] | null
          priority: 'low' | 'medium' | 'high' | 'urgent'
          provider_reviewed: boolean
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          messages?: any[]
          status?: 'active' | 'archived' | 'completed'
          created_at?: string
          updated_at?: string
          last_message_at?: string
          tags?: string[] | null
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          provider_reviewed?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          messages?: any[]
          status?: 'active' | 'archived' | 'completed'
          created_at?: string
          updated_at?: string
          last_message_at?: string
          tags?: string[] | null
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          provider_reviewed?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'patient' | 'provider' | 'admin'
      conversation_status: 'active' | 'archived' | 'completed'
      priority_level: 'low' | 'medium' | 'high' | 'urgent'
    }
  }
}
