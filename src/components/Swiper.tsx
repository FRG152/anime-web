"use client";

import Card from "./Card";
import { AnimeData } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { breakpoints } from "@/utils/swiper";

interface Props {
  title?: string;
  data: any;
}

const SwiperComponent = ({ title, data }: Props) => {
  return (
    <div className="container__swiper">
      {title && <h1 className="swiper__title">{title}</h1>}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        modules={[Autoplay, Pagination, Navigation]}
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
