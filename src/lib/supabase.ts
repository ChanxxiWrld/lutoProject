import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Fortune = {
  id: string;
  user_id: string;
  date: string;
  fortune_type: 'daily' | 'weekly' | 'monthly';
  rice_cake_type: string;
  description: string;
  created_at: string;
};
