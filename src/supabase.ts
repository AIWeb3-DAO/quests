//@ts-nocheck

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vinpqkwqxhdiisubfufq.supabase.co"         //process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbnBxa3dxeGhkaWlzdWJmdWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MzI3NzMsImV4cCI6MjAyMjAwODc3M30.ufSLi1xn8mvtUsl6mnZxqSoxZszoYlPzTwJj9t5Hkn8"                        //process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log("supabse identity", supabaseKey)
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;