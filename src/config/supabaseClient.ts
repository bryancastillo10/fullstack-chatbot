import { createClient, SupabaseClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_REACT_ANON_KEY as string;

const supabase:SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;