"use client";

import { Anime } from "@/app/types/anime";
import { useAnime } from "@/app/hooks";
import { AnimeCard, AnimeCardSkeleton } from "@/app/components";
import { Button } from "../ui";

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

  if (allAnimeLoading) return <AnimeCardSkeleton />
  if (allAnimeError) return <p>Something went wrong....</p>

  return (
    <div className="space-y-4 pb-10">
      <h3 className="pt-6 text-xl font-bold">
        Browse Animes
      </h3>

      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {animes.map((anime: Anime) => (
          <li key={anime.mal_id}>
            <AnimeCard key={anime.mal_id} anime={anime}/> 
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <Button
          type="button"
          onClick={() => allAnimeNextPage()}
          disabled={!allAnimeHasNextPage || allAnimeFetchingNextPage}
        >
          {allAnimeFetchingNextPage ? "Loading..." : allAnimeHasNextPage ? "Load more" : "No more results"}
        </Button>
      </div>
    </div>
  )
}