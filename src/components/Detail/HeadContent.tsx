import Image from "next/image";
import ButtonComponent from "../Button";
import { AnimeAttributes } from "@/types";
import { Eye, Pin, Plus, Star } from "lucide-react";

interface Props {
  data: AnimeAttributes;
}

const HeadContent = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-[60px]">
      <Image
        src={data?.posterImage.original}
        alt="poster image"
        width={1000}
        height={1000}
        style={{
          width: "260px",
          height: "400px",
          objectFit: "cover",
          borderRadius: 20,
        }}
      />
      <div className="flex items-center gap-5">
        <h1 className="text-white text-5xl font-semibold">
          {data?.titles?.en
            ? data?.titles?.en_jp
              ? data?.titles?.en_us
              : data?.titles?.ja_jp
            : ""}
        </h1>
        <p className="flex items-center gap-2 text-white">
          <Star /> {data?.averageRating}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <ButtonComponent text="Watching" icon={<Eye />} />
        <ButtonComponent text="To Watch" icon={<Pin />} />
        <ButtonComponent text="Add to Collection" icon={<Plus />} />
      </div>
    </div>
  );
};

export default HeadContent;
