import Card from "./Card";
import { AnimeData } from "@/types";

const AnimeList = async () => {
  const response = await fetch("https://kitsu.io/api/edge/anime");
  const data = await response.json();

  return (
    <div className="container__list">
      {data.data.map((item: AnimeData) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default AnimeList;
