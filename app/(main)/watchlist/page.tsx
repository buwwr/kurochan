import Watchlist from "@/components/watchlist/Watchlist"; 

export default function WatchlistPage() {
  return (
    <div className="flex flex-col  pt-15">
      <section className="max-w-5xl mx-auto">
        <h2 className="pt-10 text-2xl font-extrabold text-left uppercase">Watchlist</h2> 

        <h3 className="pt-6 text-xl font-bold">
          Recent
        </h3>
        <Watchlist />

      </section>
    </div>
  )
};