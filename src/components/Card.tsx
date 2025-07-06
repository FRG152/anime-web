"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimeData } from "@/types";

interface Props {
  data: AnimeData;
}

const Card = ({ data }: Props) => {
  const { titles, showType, status, posterImage } = data.attributes;

  return (
    <Link href={`${data.id}`} className="container__card">
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
    </Link>
  );
};

export default Card;
