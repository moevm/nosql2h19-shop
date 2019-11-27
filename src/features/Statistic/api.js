import fetchAPI from "../../commons/api";
import "firebase/firestore";

export const getStatUserAll = data => {
  return fetchAPI.post(`/api/stat/all-time`, data);
};

export const getStatUserPeriod = data => {
  return fetchAPI.post(`/api/stat/period`, data);
};
