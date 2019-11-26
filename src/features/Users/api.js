import fetchAPI from "../../commons/api";

export const getUsers = () => fetchAPI.get(`/api/users`);

export const getUser = (data) => {
  return fetchAPI.post(`/api/user`, data);
};
