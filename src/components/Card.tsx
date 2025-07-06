import { AnimeData } from "@/types";
import Image from "next/image";

interface Props {
  data: AnimeData;
}

const Card = ({ data }: Props) => {
  const { title, type, status, images } = data;
  return (
    <div className="container__card">
      <Image
        src={images.jpg.image_url}
        alt="card image"
        width={250}
        height={400}
        className="card__image"
        priority
      />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <span>{type}</span>
        <span>{status}</span>
      </div>
    </div>
  );
};

export default Card;
