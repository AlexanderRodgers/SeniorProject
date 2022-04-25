import { supabase } from "src/supabase/supabaseClient";

export async function get() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return {
      status: error.status,
      redirect: "/" 
    };
  }
   return {
    status: 302,
    headers: {
      'location': '/dashboard',
      'set-cookie': `session=; path=/; expires=0;`
    }
  } 
}