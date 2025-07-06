import { getAnimes } from "@/utils/api";
import Card from "./Card";
import { AnimeData } from "@/types";

const AnimeList = async ({ params }) => {
  const data = await getAnimes(params);
  return (
    <div className="container__list">
      {data.map((item: AnimeData) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default AnimeList;
