import Image from "next/image";
import { getAnimes } from "@/utils/api";

const Page = async ({ params }) => {
  const { attributes } = await getAnimes(params);

  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="flex items-center justify-center gap-5">
        <Image
          src={attributes?.posterImage.original}
          alt="poster image"
          width={1000}
          height={1000}
          style={{ width: "700px", height: "700px", objectFit: "cover" }}
        />
        <div>
          <h1 className="text-white text-4xl font-bold">
            {attributes?.titles?.en
              ? attributes?.titles?.en_jp
              : attributes?.titles?.ja_jp}
          </h1>
          <p className="text-white text-justify">{attributes?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
