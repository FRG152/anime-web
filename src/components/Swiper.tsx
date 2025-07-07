"use client";

import Card from "./Card";
import { AnimeData } from "@/types";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  title?: string;
  data: any;
}

const SwiperComponent = ({ title, data }: Props) => {
  return (
    <div className="container__swiper">
      {title && <h1 className="swiper__title">{title}</h1>}
      <Swiper
        slidesPerView={7}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        {data.map((item: AnimeData) => (
          <SwiperSlide key={item.id}>
            <Card data={item} showInfo={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
