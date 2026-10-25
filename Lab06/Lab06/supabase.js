import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://ufaatgyyanydexpzgjnw.supabase.co";
const supabaseKey = "sb_publishable_M3SaAtI9sWRfppLlnti8zg_DlZRYUth";

export const supabase = createClient(supabaseUrl, supabaseKey);