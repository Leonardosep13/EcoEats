import Constants from 'expo-constants';
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_KEY } = Constants.expoConfig?.extra ?? {};

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Supabase URL or Key missing');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);