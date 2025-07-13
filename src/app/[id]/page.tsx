import HeadContent from "@/components/Detail/HeadContent";
import TabsComponent from "@/components/Tabs";
import { getAnimes } from "@/utils/api";

interface Props {
  params: Promise<{ id?: string; filter?: string; category?: string }>;
}

const Page = async ({ params }: Props) => {
  const { relationships, attributes } = await getAnimes(params);
  return (
    <div className="min-h-screen flex flex-col px-5">
      {/* <iframe
        src={`https://www.youtube.com/embed/${attributes.youtubeVideoId}`}
        className="w-full h-[300px] object-cover mt-[60px]"
      /> */}
      <HeadContent data={attributes} />
      <TabsComponent data={{ ...relationships, ...attributes }} />
    </div>
  );
};

export default Page;
