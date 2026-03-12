import { Anime } from "./anime";

export interface WatchlistAnime extends Anime {
  id: string;
  user_id: string;
  added_at: string;
  status: 'Watched' | 'Ongoing' | 'Future';
}

export type WatchlistInsert = Omit<WatchlistAnime, 'id' | 'added_at' | 'user_id'>;