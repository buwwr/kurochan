"use client";

import { useWatchlist } from "@/app/hooks";
import { WatchlistAnime } from "@/app/types/watchlist";
import { useAuth } from "@/app/hooks/useAuth";
import { AnimeCard, AnimeCardSkeleton } from "@/app/components";

export default function Watchlist() {
  const { user, userId, isLoading } = useAuth();
  const {
    watchlist,
    watchlistError,
  } = useWatchlist(userId);
 
  if (!user) return <h2 className="text-lg">Please login to continue.</h2>
  if (isLoading) return <AnimeCardSkeleton />;
  if (watchlistError) return <p>Something went wrong.</p>;
  
  return (
    <div>
      <h3 className="pt-6 text-xl font-bold">
        Recently Added
      </h3>

      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {watchlist?.map((anime: WatchlistAnime) => (
          <li key={anime.mal_id}>
            <AnimeCard anime={anime}/> 
          </li>
        ))}
      </ul>
    </div>
  )
};
