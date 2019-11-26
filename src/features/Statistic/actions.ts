import * as statisticTypes from "./actionTypes";
import {StatisticDataState} from "./reducer";

export const getStatisticUserAll = () => ({
    type: statisticTypes.STATISTIC_USER_ALL_GET
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