import fetchAPI from "../../commons/api";
import "firebase/firestore";

export const getStatUserAll = data => {
  return fetchAPI.post(`/api/stat/all-time`, data);
};

export const getStatUserPeriod = data => {
  return fetchAPI.post(`/api/stat/period`, data);
};

export const getStatAll = () => {
  return fetchAPI.post(`/api/all-users/stat/all-time`);
};

export const getStatPeriod = data => {
  return fetchAPI.post(`/api/all-users/stat/period`, data);
};
