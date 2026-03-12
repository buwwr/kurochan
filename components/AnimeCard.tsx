"use client";

import { useWatchlist } from "@/hooks";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { AnimeCardProps } from "@/types";
import { useRouter } from "next/navigation";

export function AnimeCard({anime}: AnimeCardProps) {
  const { user, userId } = useAuth();
  const {
    watchlist, 
    addToWatchlist, 
    addingToWatchlist,
    deleteFromWatchlist,
    deletingFromWatchlist,  
    isInWatchlist, 
  } = useWatchlist(userId);

  const alreadyAdded = isInWatchlist(anime.mal_id);
  const watchlistItem = watchlist.find(item => item.mal_id === anime.mal_id);

  const router = useRouter();
  
  return (
    <div className="flex flex-col gap-2 py-2">
      <Link href={`/anime/${anime.mal_id}`} className="group relative overflow-hidden">
        <div className="aspect-2/3 w-full overflow-hidden">
          <img 
            className="h-full w-full object-cover object-center"
            src={anime.images_webp_lg_url}
            alt={anime.title_en ?? "Anime"}
          />
        </div>
        
        <h3 className="pt-2 text-sm font-bold leading-snug">
          {anime.title_en ?? anime.title_default}
        </h3>
        <p className="pt-2 text-sm font-bold">
          {anime.year ?? anime.year} 
        </p>

        <div className="absolute bg-black/80 inset-0 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-transform duration-400 text-white px-2">
          <p className="pt-2 text-sm font-bold leading-snug">{anime.title_en ?? anime.title_default ?? ""}</p>
          {anime.score ?
            <p className="pt-2 text-sm text-zinc-400 font-bold">Score: {anime.score ?? ""}</p>
            : ""
          }
          {anime.episodes ? 
            <p className="text-sm text-zinc-400 font-bold">Episode: {anime.episodes}</p> 
            : "" 
          }
          <p className="pt-2 text-sm line-clamp-5">{anime.synopsis}</p>

        </div>

      </Link>

      <button
        
        onClick={ (e) => {
          e.stopPropagation()   // button click doesn't navigate 

          if (!user) {
            router.push("/login")
            return
          }

          if (alreadyAdded) {
            watchlistItem?.id && deleteFromWatchlist(watchlistItem.id);
          } else { 
            addToWatchlist({
              mal_id: anime.mal_id,
              title_default: anime.title_default,
              title_en: anime.title_en,
              title_jp: anime.title_jp,
              images_webp_url: anime.images_webp_url,
              images_webp_sm_url: anime.images_webp_sm_url,
              images_webp_lg_url: anime.images_webp_lg_url,
              type: anime.type,
              episodes: anime.episodes,
              synopsis: anime.synopsis,
              year: anime.year,
              score: anime.score,
              genres: anime.genres,
              status: 'Future',
            })
          }
        }}
        disabled={addingToWatchlist || deletingFromWatchlist}
        className="rounded border px-4 py-2 text-sm disabled:opacity-50"
      >
        {!user && <Link href="/login?redirect="></Link>}
        {alreadyAdded ? 
          deletingFromWatchlist ? "Deleting..." : "Delete"
          : addingToWatchlist ? "Adding..." : "Add"}
      </button>
    </div>
  )
}



{/* <p>{anime.score ? `Score: ${anime.score}` : ""}</p>
<p>{anime.episodes ? `Episodes: ${anime.episodes}` : ""}</p> */}


// {anime.genres.map( (genre: string) => (
//   <span key={genre} className="text-sm">
//     {genre}
//   </span>
// ))}