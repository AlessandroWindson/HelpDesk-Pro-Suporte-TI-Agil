import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('URL e chave anon do Supabase não configuradas');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
