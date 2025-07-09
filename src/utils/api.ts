const URL = process.env.URL_BASE_API;

export const getAnimes = async (
  params: Promise<{
    id?: string | "";
    page?: string | "";
    filter?: string | "";
    category?: string | "";
  }>
) => {
  const { id, page, filter, category } = await params;
  try {
    let url = `${URL}/anime?page[limit]=20&page[offset]=0`;

    if (id) {
      url = `${URL}/anime/${id}`;
    }

    if (page) {
      url = `${URL}/anime?page[limit]=20&page[offset]=${page}`;
    }

    if (filter) {
      url = `${URL}/anime?filter[text]=${filter}`;
    }

    if (category) {
      url = `${URL}/anime?filter[categories]=${category?.toLowerCase()}`;
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

export const getCategories = async () => {
  try {
    const response = await fetch(`${URL}/categories`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error to get trending animes", error);
  }
};
