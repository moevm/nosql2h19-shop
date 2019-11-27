import fetchAPI from "../../commons/api";

export const getUsers = () => fetchAPI.get(`/api/users`);

export const getUser = (data) => {
  return fetchAPI.post(`/api/user`, data);
};

export const importUsers = (data) => {
  return fetchAPI.postFile(`/api/import/users`, data);
};
