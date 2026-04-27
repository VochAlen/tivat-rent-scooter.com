import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for TypeScript
export interface Testimonial {
  id: string
  name: string
  email: string
  role: string
  content: string
  is_verified: boolean
  created_at: string
  updated_at: string
  verification_token: string
}