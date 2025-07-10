import Card from "./Card";
import { AnimeData } from "@/types";

interface Props {
  data: AnimeData[];
  title?: string;
  styles?: string;
}

const Animes = async ({ title, data, styles }: Props) => {
  return (
    <div id="animes" className={`container__list ${styles}`}>
      {title && <h1 className="list__title">{title}</h1>}
      <div className="list__content">
        {data.map((item: AnimeData) => (
          <Card key={item.id} data={item} showInfo={true} />
        ))}
      </div>
    </div>
  );
};

export default Animes;
