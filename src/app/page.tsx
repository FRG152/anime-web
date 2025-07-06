import AnimeList from "@/components/AnimeList";

export default function Home() {
  return (
    <div className="min-h-screen p-20">
      <h1 className="text-center font-bold text-5xl">ANIME WEB</h1>
      <p>Search for your favorite anime</p>
      <AnimeList />
    </div>
  );
}
