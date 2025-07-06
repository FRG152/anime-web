import { getAnimes } from "@/utils/api";

const Page = async ({ params }) => {
  const data = await getAnimes(params);

  return <div>More about</div>;
};

export default Page;
