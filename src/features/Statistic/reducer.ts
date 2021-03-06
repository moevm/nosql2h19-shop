import * as statisticTypes from "./actionTypes";

export interface StatisticDataState {
  category: string,
  amount: number
}

export interface StatisticState {
  data: Array<StatisticDataState>,
  isRequesting: boolean
}

interface StatisticPayload {
  data?: object,
}

interface StatisticAction {
  type: string,
  payload?: StatisticPayload,
  error?: object
}

const initialState: StatisticState = {
  data: [],
  isRequesting: false
};

export default (state: StatisticState = initialState, action: StatisticAction) => {
  const { type, payload = {}, error } = action;
  switch (type) {
    case statisticTypes.STATISTIC_PERIOD_GET:
    case statisticTypes.STATISTIC_ALL_GET:
    case statisticTypes.STATISTIC_USER_PERIOD_GET:
    case statisticTypes.STATISTIC_USER_ALL_GET:
      return {
        ...state,
        isRequesting: true
      };
    case statisticTypes.STATISTIC_PERIOD_GET_SUCCESS:
    case statisticTypes.STATISTIC_ALL_GET_SUCCESS:
    case statisticTypes.STATISTIC_USER_PERIOD_GET_SUCCESS:
    case statisticTypes.STATISTIC_USER_ALL_GET_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: payload.data
      };
    case statisticTypes.STATISTIC_PERIOD_GET_FAIL:
    case statisticTypes.STATISTIC_ALL_GET_FAIL:
    case statisticTypes.STATISTIC_USER_PERIOD_GET_FAIL:
    case statisticTypes.STATISTIC_USER_ALL_GET_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: error
      };
    default:
      return state;
  }
};
