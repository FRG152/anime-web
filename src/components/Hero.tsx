import { Pin } from "lucide-react";
import { Suspense } from "react";
import SwiperComponent from "./Swiper";
import ButtonComponent from "./Button";
import LoadingComponent from "./Loading";
import { getTrendingAnimes } from "@/utils/api";

const Hero = async () => {
  const trending = await getTrendingAnimes();

  return (
    <div id="home" className="container__hero">
      <div className="hero__content">
        <h1 className="hero__title">Jujutsu Kaisen</h1>
        <p className="hero__desc">
          Jujutsu Kaisen is an action-packed anime about Yuji Itadori, a high
          schooler who gains cursed powers and joins a sorcerer school to fight
          evil spirits and protect people.
        </p>
        <div className="hero__buttons">
          <ButtonComponent styles="bg-white text-black" text="See More" />
          <ButtonComponent icon={<Pin />} text="To Watch" />
        </div>
      </div>
      <video autoPlay muted loop className="hero__video">
        <source src="/videos/clip_01.mp4" />
      </video>
      <Suspense fallback={<LoadingComponent />}>
        <SwiperComponent
          data={trending}
          title="Trending"
          styles="left-0 right-0 bottom-0 absolute"
        />
      </Suspense>
    </div>
  );
};

export default Hero;
