import Card from "./Card";
import { AnimeData } from "@/types";

interface Props {
  data: any;
  title?: string;
  styles?: string;
}

const ListComponent = async ({ title, data, styles }: Props) => {
  return (
    <div className="container__list">
      {title && <h1 className="list__title">{title}</h1>}
      <div className={`list__content ${styles}`}>
        {data.map((item: AnimeData) => (
          <Card key={item.id} data={item} showInfo={true} />
        ))}
      </div>
    </div>
  );
};

export default ListComponent;
