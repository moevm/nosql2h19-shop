import fetchAPI from "../../commons/api";

export const getUserTransactions = data => {
  return fetchAPI.post(`/api/transactions`, data);
};
