import { GetAnimesParams } from "@/types";

const URL = process.env.URL_BASE_API;

export const getAnimes = async (params: GetAnimesParams) => {
  const { id, filter } = params;

  console.log(id);

  try {
    let url = `${URL}/anime`;

    if (id) {
      url = `${URL}/anime/${id}`;
    }

    if (filter) {
      url = `${URL}/anime?filter[text]=${params?.filter}`;
    }

    const response = await fetch(`${url}`);

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("Error to get animes", error);
  }
};

export const getTrendingAnimes = async () => {
  try {
    const response = await fetch(`${URL}/trending/anime`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error to get trending animes", error);
  }
};
