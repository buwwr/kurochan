"use client";

import { Anime } from "@/types/anime";
import { useAnime } from "@/hooks";
import { AnimeCard } from "@/components";

export function AllAnimeList() {
  const {
    allAnime,
    allAnimeLoading,
    allAnimeError,
    allAnimeNextPage,
    allAnimeHasNextPage,
    allAnimeFetchingNextPage,
  } = useAnime();
  
  const animes: Anime[] = allAnime?.pages.flatMap((page) => page.data) ?? [];

  if (allAnimeLoading) return <p>Loading....</p>
  if (allAnimeError) return <p>Something went wrong....</p>

  return (
    <div className="space-y-4 pb-10">
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {animes.map((anime: Anime) => (
          <li key={anime.mal_id}>
            <AnimeCard key={anime.mal_id} anime={anime}/> 
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => allAnimeNextPage()}
          disabled={!allAnimeHasNextPage || allAnimeFetchingNextPage}
          className="rounded border px-4 py-2 text-sm disabled:opacity-50"
        >
          {allAnimeFetchingNextPage ? "Loading..." : allAnimeHasNextPage ? "Load more" : "No more results"}
        </button>
      </div>
    </div>
  )
}