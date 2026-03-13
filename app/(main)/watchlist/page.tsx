import { AnimeCardSkeleton } from "@/app/components";
import Watchlist from "@/app/components/watchlist/Watchlist"; 

export default function WatchlistPage() {
  return (
    <section className="max-w-5xl mx-auto w-full px-6 pt-25">
      <h2 className="text-2xl font-extrabold text-left uppercase">
        My Watchlist
      </h2> 
      <Watchlist />
    </section>
  )
};