import { AllAnimeList, TopAnimeList }from "@/app/components/discover";

export default function Discover() {
  return (
    <section className="max-w-5xl mx-auto w-full px-6 pt-25">
      <h2 className="text-2xl font-extrabold text-left uppercase">Discover</h2> 
      <TopAnimeList />
      <AllAnimeList />
    </section>
  )
};