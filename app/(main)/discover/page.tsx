import { AllAnimeList, TopAnimeList }from "@/components/discover";

export default function Discover() {

  return (
    <div className="flex flex-col pt-15">
      <section className="max-w-5xl mx-auto">
        <h2 className="pt-10 text-2xl font-extrabold text-left uppercase">Discover</h2> 

        <h3 className="pt-6 text-xl font-bold">
          Top Anime This Month
        </h3>
        <TopAnimeList />
        
        <h3 className="pt-6 text-xl font-bold">
          Browse Animes
        </h3>
        <AllAnimeList />
      </section>
    </div>
  );
}



// bg-zinc-50 