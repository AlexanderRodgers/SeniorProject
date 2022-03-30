import { createClient } from '@supabase/supabase-js'
import { variables } from '../variables'

const supabaseUrl = variables.supabaseUrl;
const supabaseAnonKey = variables.supabaseAnonKey; 

export const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);