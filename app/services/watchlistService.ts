import { supabase } from "@/app/lib/supabase/supabase";
import { WatchlistAnime, WatchlistInsert } from "../types/watchlist";

export const watchlistService = {
  getAll: async (userId: string): Promise<WatchlistAnime[]> => { 
    const { data, error } = await supabase
      .from('watchlist')
      .select('*')
      .eq('user_id', userId)
      .order('added_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  create: async (input: WatchlistInsert, userId: string): Promise<WatchlistInsert> => {    
    const { data, error } = await supabase
      .from('watchlist')
      .insert({
        ...input,
        user_id: userId,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  delete: async (id: string, userId: string): Promise<void> => {
    const { error } = await supabase
      .from('watchlist')
      .delete()
      .eq('id', id)
      .eq('user_id', userId)

    if (error) throw error;
  },

}