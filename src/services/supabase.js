import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://usgdkbspkqiacokubwjm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzZ2RrYnNwa3FpYWNva3Vid2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MzA1MDAsImV4cCI6MjA0MTAwNjUwMH0.7xvG3gaI_46ke8Is1CzVzwwTM1JbNc1wlgmCplFt0N0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
