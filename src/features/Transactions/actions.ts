import * as transactionTypes from "./actionTypes";
import {TransactionDataState} from "./reducer";

export const getTransactionsUserAll = (id: string) => ({
    type: transactionTypes.TRANSACTIONS_USER_ALL_GET,
    payload: { id }
});

export const getTransactionsUserAllSuccess = ( data: Array<TransactionDataState> ) => ({
    type: transactionTypes.TRANSACTIONS_USER_ALL_GET_SUCCESS,
    payload: {
        data
    }
});

export const getTransactionsUserAllFail = (error: object) => ({
    type: transactionTypes.TRANSACTIONS_USER_ALL_GET_FAIL,
    error
});