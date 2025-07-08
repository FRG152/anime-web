import Hero from "@/components/Hero";
import Animes from "@/components/Animes";
import { Suspense } from "react";
import { getAnimes } from "@/utils/api";
import LoadingComponent from "@/components/Loading";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    id?: string | "";
    filter?: string | "";
    category?: string | "";
  }>;
}) {
  const animes = await getAnimes(searchParams);

  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingComponent />}>
        <Animes title={"Animes"} data={animes} styles="mt-60" />
      </Suspense>
    </>
  );
}
