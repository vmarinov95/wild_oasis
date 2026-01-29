import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://edtvpozsatiarhntzdbv.supabase.co";
const supabaseKey = "sb_publishable_fRlfJSlNXY0QFnKOPssI0w_vA02Orx_";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
