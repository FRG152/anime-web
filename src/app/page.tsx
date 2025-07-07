import Search from "@/components/Search";
import ListComponent from "@/components/List";
import SwiperComponent from "@/components/Swiper";
import { getAnimes, getTrendingAnimes } from "@/utils/api";
import { Suspense } from "react";
import LoadingComponent from "@/components/Loading";

interface Props {
  searchParams?: Promise<{ filter?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const animes = await getAnimes(params || {});
  const trending = await getTrendingAnimes();

  return (
    <div className="min-h-screen p-5">
      {/* <h1 className="font-bold text-5xl text-center text-white">
        Anime Universe
      </h1>
      <p className="text-center text-white mt-4">
        Welcome to Anime Universe, your ultimate destination to explore,
        discover, and search for all your favorite anime shows and series.
        Whether you're looking for the latest releases, classic masterpieces, or
        hidden gems, our comprehensive database has it all. Browse through
        detailed information, watch trailers, and find recommendations based on
        your preferences. Dive into the world of anime like never before!
      </p> */}
      <Search />
      <Suspense fallback={<LoadingComponent />}>
        <SwiperComponent title="Trending" data={trending} />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <ListComponent title={"Animes"} data={animes} />
      </Suspense>
    </div>
  );
}
