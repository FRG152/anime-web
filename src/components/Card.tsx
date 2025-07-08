"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimeData } from "@/types";

interface Props {
  data: AnimeData;
  styles?: string;
  showInfo?: boolean;
}

const Card = ({ data, showInfo, styles }: Props) => {
  const { titles, posterImage } = data.attributes;

  return (
    <Link href={`${data.id}`} className={`container__card ${styles}`}>
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
        </div>
      )}
    </Link>
  );
};

export default Card;
