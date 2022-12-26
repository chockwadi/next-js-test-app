const api_url = "https://api.github.com/";

export const gistGistListByUserName = async (val: string) => {
  const username: string = val.toLocaleLowerCase().replace(/\s/g, "");
  const dataFetch = await fetch(`${api_url}users/${username}/gists`);
  const data = await dataFetch.json();
  return data;
};
export const getGistById = async (id: number) => {
  const dataFetch = await fetch(`${api_url}gists/${id}`);
  const data = await dataFetch.json();
  return data;
};
