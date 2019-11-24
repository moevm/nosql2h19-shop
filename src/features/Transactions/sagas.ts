import * as transactionTypes from "./actionTypes";
import * as transactionActions from './actions'
import { put, takeLatest } from "@redux-saga/core/effects";
import * as API from './api';
import * as mocks from "../../mocks";

export function* getTransactionsUserAll() {
    try {
        const { transactions } = yield mocks.getUserTransactions();
        yield put(transactionActions.getTransactionsUserAllSuccess(transactions));
    } catch (error) {
        console.log(error);
        yield put(transactionActions.getTransactionsUserAllFail(error));
    }
}

function* watchTransactions() {
    yield takeLatest(transactionTypes.TRANSACTIONS_USER_ALL_GET, getTransactionsUserAll);
}

export default watchTransactions;