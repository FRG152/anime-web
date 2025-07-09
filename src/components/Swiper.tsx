"use client";

import Card from "./Card";
import { AnimeData } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { breakpoints } from "@/utils/swiper";

interface Props {
  title?: string;
  data: AnimeData[];
  styles?: string;
}

const SwiperComponent = ({ title, data, styles }: Props) => {
  return (
    <div className={`container__swiper ${styles}`}>
      {title && <h1 className="swiper__title">{title}</h1>}
      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        slidesPerView={1}
        spaceBetween={-100}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {data.map((item: AnimeData) => (
          <SwiperSlide key={item.id}>
            <Card data={item} showInfo={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
