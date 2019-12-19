import fetchAPI from "../../commons/api";

export const getСategories = () => {
  return fetchAPI.post(`/api/categories`);
};
