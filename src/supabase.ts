// supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log("supabse identity", supabaseKey)
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;