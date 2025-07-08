"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimeData } from "@/types";

interface Props {
  data: AnimeData;
  showInfo?: boolean;
}

const Card = ({ data, showInfo }: Props) => {
  const { titles, showType, status, posterImage } = data.attributes;

  return (
    <Link href={`${data.id}`} className="container__card">
      <Image
        src={posterImage?.original}
        alt="card image"
        width={1000}
        height={1000}
        className="card__image"
        priority
      />
      {showInfo && (
        <div className="card__content">
          <h3 className="card__title">
            {titles?.en ? titles.en_jp : titles.ja_jp}
          </h3>
          <p className="flex items-center text-white gap-2">
            <span className="text-white text-lg font-extralight">
              {showType}
            </span>
            -
            <span className="text-white text-lg font-extralight">{status}</span>
          </p>
        </div>
      )}
    </Link>
  );
};

export default Card;
