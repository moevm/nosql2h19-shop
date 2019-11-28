import * as statisticTypes from "./actionTypes";
import {StatisticDataState} from "./reducer";

export const getStatisticUserAll = (id: string) => ({
    type: statisticTypes.STATISTIC_USER_ALL_GET,
    payload: { id }
});

export const getStatisticUserAllSuccess = ( data: Array<StatisticDataState> ) => ({
    type: statisticTypes.STATISTIC_USER_ALL_GET_SUCCESS,
    payload: {
        data
    }
});

export const getStatisticUserAllFail = (error: object) => ({
    type: statisticTypes.STATISTIC_USER_ALL_GET_FAIL,
    error
});

export const getStatisticUserPeriod = (id: string, startDate: number | boolean, endDate: number | boolean) => ({
    type: statisticTypes.STATISTIC_USER_PERIOD_GET,
    payload: { id, startDate, endDate }
});

export const getStatisticUserPeriodSuccess = ( data: Array<StatisticDataState> ) => ({
    type: statisticTypes.STATISTIC_USER_PERIOD_GET_SUCCESS,
    payload: {
        data
    }
});

export const getStatisticUserPeriodFail = (error: object) => ({
    type: statisticTypes.STATISTIC_USER_PERIOD_GET_FAIL,
    error
});

export const getStatisticAll = () => ({
    type: statisticTypes.STATISTIC_ALL_GET,
});

export const getStatisticAllSuccess = ( data: Array<StatisticDataState> ) => ({
    type: statisticTypes.STATISTIC_ALL_GET_SUCCESS,
    payload: {
        data
    }
});

export const getStatisticAllFail = (error: object) => ({
    type: statisticTypes.STATISTIC_ALL_GET_FAIL,
    error
});

export const getStatisticPeriod = (startDate: number | boolean, endDate: number | boolean) => ({
    type: statisticTypes.STATISTIC_PERIOD_GET,
    payload: { startDate, endDate }
});

export const getStatisticPeriodSuccess = ( data: Array<StatisticDataState> ) => ({
    type: statisticTypes.STATISTIC_PERIOD_GET_SUCCESS,
    payload: {
        data
    }
});

export const getStatisticPeriodFail = (error: object) => ({
    type: statisticTypes.STATISTIC_PERIOD_GET_FAIL,
    error
});