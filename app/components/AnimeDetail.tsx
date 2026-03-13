"use client";

import { useAnimeById } from "@/app/hooks";

export function AnimeDetail({ id }: { id: number }) {
  const { 
    animeById,
    animeByIdLoading, 
    animeByIdError,
  } = useAnimeById(id);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">

      {/* Hero Banner — blurred background */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={animeById?.images_webp_lg_url}
          className="w-full h-full object-cover scale-110 blur-sm brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-50" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 -mt-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Poster */}
          <div className="shrink-0">
            <img
              src={animeById?.images_webp_lg_url}
              alt={animeById?.title_default}
              className="w-48 lg:w-56 rounded-2xl shadow-2xl border-4 border-white object-cover aspect-2/3"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 pt-32 lg:pt-36">

            {/* Title */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 leading-tight">
                {animeById?.title_default}
              </h1>
              {animeById?.title_jp && (
                <p className="text-zinc-400 text-sm mt-1">{animeById?.title_jp}</p>
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {animeById?.genres?.map((genre: string) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 text-sm">
              {animeById?.score && (
                <div className="flex flex-col">
                  <span className="text-zinc-400 text-xs uppercase tracking-wider">Score</span>
                  <span className="text-zinc-900 font-bold text-lg">⭐ {animeById.score}</span>
                </div>
              )}
              {animeById?.episodes && (
                <div className="flex flex-col">
                  <span className="text-zinc-400 text-xs uppercase tracking-wider">Episodes</span>
                  <span className="text-zinc-900 font-bold text-lg">{animeById.episodes}</span>
                </div>
              )}
              {animeById?.year && (
                <div className="flex flex-col">
                  <span className="text-zinc-400 text-xs uppercase tracking-wider">Year</span>
                  <span className="text-zinc-900 font-bold text-lg">{animeById.year}</span>
                </div>
              )}
              {animeById?.type && (
                <div className="flex flex-col">
                  <span className="text-zinc-400 text-xs uppercase tracking-wider">Type</span>
                  <span className="text-zinc-900 font-bold text-lg">{animeById.type}</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Synopsis */}
        {animeById?.synopsis && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Synopsis</h2>
            <p className="text-zinc-600 leading-relaxed text-sm">{animeById.synopsis}</p>
          </div>
        )}

      </div>
    </div>
  )
}


{/* <div className="flex">
      <div className="flex flex-col">
        <div>
          <h2>{animeById?.title_default} / {animeById?.title_jp}</h2>
          {animeById?.episodes && <p>Episodes: {animeById.episodes}</p>}
          {animeById?.score && <p>Score: {animeById?.score}</p>}
          {animeById?.genres && <p>Genres: {animeById?.genres.join(", ")}</p>}
          {animeById?.year && <p>Year: {animeById?.year}</p>}
          {animeById?.type && <p>Type: {animeById?.type}</p>}
        </div>
        <p>{animeById?.synopsis}</p>
      </div>
      <img src={animeById?.images_webp_lg_url} />
    </div> */}