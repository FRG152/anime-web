import { AnimeData } from "@/types";
import Image from "next/image";

interface Props {
  data: AnimeData;
}

const Card = ({ data }: Props) => {
  const { titles, showType, status, posterImage } = data.attributes;
  return (
    <div className="container__card">
      <Image
        src={posterImage?.original}
        alt="card image"
        width={250}
        height={400}
        className="card__image"
        priority
      />
      <div className="card__content">
        <h3 className="card__title">{titles?.en}</h3>
        <span>{showType}</span>
        <span>{status}</span>
      </div>
    </div>
  );
};

export default Card;
