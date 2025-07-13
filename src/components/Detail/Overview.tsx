import { AnimeAttributes } from "@/types";

interface Props {
  data: AnimeAttributes;
}

const Overview = ({ data }: Props) => {
  return (
    <div className="w-full flex items-start">
      <div className="w-2/5">
        <h1 className="text-white text-2xl font-semibold my-5">Details</h1>
        <div className="flex flex-col gap-8 max-w-[250px]">
          <div className="text-white flex items-center justify-between">
            <p className="font-semibold">Type</p>
            <p className="font-extralight">{data.showType}</p>
          </div>
          <div className="text-white flex items-center justify-between">
            <p className="font-semibold">Episodes </p>
            <p className="font-extralight">{data.episodeCount}</p>
          </div>
          <div className="text-white flex items-center justify-between">
            <p className="font-semibold">Status</p>
            <p className="font-extralight">{data.status}</p>
          </div>
          <div className="text-white flex items-center justify-between">
            <p className="font-semibold">Age Rating</p>
            <p className="font-extralight">{data.ageRating}</p>
          </div>
          <div className="text-white flex items-center justify-between">
            <p className="font-semibold">Age Rating Guide</p>
            <p className="font-extralight text-right">{data.ageRatingGuide}</p>
          </div>
        </div>
      </div>
      <div className="w-3/5">
        <h1 className="text-white text-2xl font-semibold my-5">Description</h1>
        <p className="text-white font-light text-justify whitespace-break-spaces">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Overview;
