import { CATEGORIES_API } from "constants/api";

export const categoriesLoader = async () => {
  const res = await fetch(CATEGORIES_API);
  if (!res.ok) throw Error("Could not get categories");
  return res.json();
};
