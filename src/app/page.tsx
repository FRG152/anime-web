import { Suspense } from "react";
import ListComponent from "@/components/List";
import SwiperComponent from "@/components/Swiper";
import LoadingComponent from "@/components/Loading";
import { getAnimes, getTrendingAnimes } from "@/utils/api";
import Image from "next/image";

interface Props {
  searchParams?: Promise<{ filter?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const animes = await getAnimes(params || {});
  const trending = await getTrendingAnimes();

  return (
    <div className="min-h-screen">
      <div className="container__hero">
        <Image
          src={"/images/illustration-anime-city.jpg"}
          alt="illustration"
          width={3000}
          height={3000}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Suspense fallback={<LoadingComponent />}>
        <SwiperComponent title="Trending" data={trending} />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <ListComponent title={"Animes"} data={animes} />
      </Suspense>
    </div>
  );
}
