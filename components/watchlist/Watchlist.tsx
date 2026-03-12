"use client";

import { useWatchlist } from "@/hooks";
import { WatchlistAnime } from "@/types/watchlist";
import { useAuth } from "@/hooks/useAuth";
import { AnimeCard } from "@/components";

export default function Watchlist() {
  const { user, userId } = useAuth();
  const {
    watchlist,
    watchlistLoading,
    watchlistError,
  } = useWatchlist(userId);
 
  if (!user) return <p>Please log in to view your watchlist.</p>
  if (watchlistLoading) return <p>Loading top anime...</p>;
  if (watchlistError) return <p>Something went wrong.</p>;
  
  return (
    <div className="space-y-4">
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {watchlist?.map((anime: WatchlistAnime) => (
          <li key={anime.mal_id}>
            <AnimeCard anime={anime}/> 
          </li>
        ))}
      </ul>
    </div>
  )
}



{/* <img 
              src={anime.image_url ?? ""}
              alt={anime.title ?? "Anime"}
              className="rounded mb-2"
            />
            <h3 className="font-semibold text-sm">
              {anime.title ?? "Unknown title"}
            </h3>
            <p className="text-xs text-gray-500">
              ⭐ {anime.score ?? "N/A"}
            </p>

            <button
              type="button"
              onClick={() => deleteFromWatchlist(anime.id)}
              className="rounded border px-4 py-2 text-sm disabled:opacity-50"
            >
              { deletingFromWatchlist ? "Deleting..." : "Delete"}
            </button> */}