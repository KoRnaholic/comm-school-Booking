// records?limit=20

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchApi(path) {
  const response = await fetch(`${API_URL}/${path}`);
  const data = await response.json();

  return data;
}
