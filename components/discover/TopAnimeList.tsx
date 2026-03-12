"use client";

import { Anime } from "@/types/anime";
import { AnimeCard } from "@/components";
import { useAnime } from "@/hooks";

export function TopAnimeList() {
  const { 
    topAnimeMonth, 
    topAnimeMonthLoading, 
    topAnimeMonthError 
  } = useAnime();

  if (topAnimeMonthLoading) return <p>Loading top anime...</p>;
  if (topAnimeMonthError) return <p>Something went wrong.</p>;

  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {topAnimeMonth?.map((anime: Anime) => (
        <li key={`top-${anime.mal_id}`}>
          <AnimeCard key={anime.mal_id} anime={anime}/> 
        </li>
      
      ))}
    </ul>
  );
}