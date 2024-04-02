// records?limit=20

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchApi(path) {
  const response = await fetch(
    `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/${path}`,
    {}
  );

  return response.json();
}
