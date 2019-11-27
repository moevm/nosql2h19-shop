import fetchAPI from "../../commons/api";

export const getUserTransactions = data => {
  return fetchAPI.post(`/api/transactions`, data);
};

export const importTransactions = (data) => {
  return fetchAPI.postFile(`/api/import/transactions`, data);
};
