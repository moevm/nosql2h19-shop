import fetchAPI from "../../commons/api";

export const getUserTransactions = data => {
  return fetchAPI.post(`/api/transactions`, data);
};

export const getUserTransaction = data => {
  return fetchAPI.post(`/api/transaction`, data);
};

export const importTransactions = (data) => {
  return fetchAPI.postFile(`/api/import/transactions`, data);
};

export const exportTransactions = (data) => {
  return fetchAPI.post(`/api/export`, data);
};
