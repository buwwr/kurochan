"use client";

import { Anime } from "@/app/types/anime";
import { AnimeCard, AnimeCardSkeleton } from "@/app/components";
import { useAnime } from "@/app/hooks";

export function TopAnimeList() {
  const { 
    topAnimeMonth, 
    topAnimeMonthLoading, 
    topAnimeMonthError 
  } = useAnime();

  if (topAnimeMonthLoading) return <AnimeCardSkeleton />;
  if (topAnimeMonthError) return <p>Something went wrong.</p>;

  return (
    <div>
      <h3 className="pt-6 text-xl font-bold">
        Top Anime This Month
      </h3>

      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {topAnimeMonth?.map((anime: Anime) => (
          <li key={`top-${anime.mal_id}`}>
            <AnimeCard key={anime.mal_id} anime={anime}/> 
          </li>
        
        ))}
      </ul>
    </div>
  )
};