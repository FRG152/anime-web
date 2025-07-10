import Hero from "@/components/Hero";
import Animes from "@/components/Animes";
import { getAnimes } from "@/utils/api";

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
      <Animes title={"Animes"} data={animes} styles="mt-10" />
    </>
  );
}
