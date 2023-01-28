import { CATEGORIES_API } from "constants/api";

export const categoryDetailsLoader = async ({ params }) => {
  const { id } = params;
  const url = `${CATEGORIES_API}/${id}`;
  const res = await fetch(url);
  if (!res.ok) throw Error("Category not found");
  return res.json();
};
