import * as statisticTypes from "./actionTypes";
import * as statisticActions from './actions'
import { put, takeLatest } from "@redux-saga/core/effects";
import * as API from './api';
import * as mocks from "../../mocks";

export function* getStatisticUserAll() {
    try {
        const { categories } = yield mocks.getUserStatAllTime();
        yield put(statisticActions.getStatisticUserAllSuccess(categories));
    } catch (error) {
        console.log(error);
        yield put(statisticActions.getStatisticUserAllFail(error));
    }
}

function* watchStatistic() {
    yield takeLatest(statisticTypes.STATISTIC_USER_ALL_GET, getStatisticUserAll);
}

export default watchStatistic;