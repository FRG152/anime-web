import Search from "@/components/Search";
import AnimeList from "@/components/AnimeList";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="min-h-screen p-5">
      <h1 className="text-center font-bold text-5xl">Anime Universe</h1>
      <p className="text-center mt-4">
        Welcome to Anime Universe, your ultimate destination to explore,
        discover, and search for all your favorite anime shows and series.
        Whether you're looking for the latest releases, classic masterpieces, or
        hidden gems, our comprehensive database has it all. Browse through
        detailed information, watch trailers, and find recommendations based on
        your preferences. Dive into the world of anime like never before!
      </p>
      <Search />
      <AnimeList params={params} />
    </div>
  );
}
