import * as transactionTypes from "./actionTypes";
import { TransactionDataState } from "./reducer";
import {FilterInterface} from "../Users/User/FilterTransactions";

export interface GetTransactionsUserAllOptions {
  withUser?: boolean;
}

export const getTransactionsUserAll = (
  id: string,
  options?: GetTransactionsUserAllOptions | null,
  filter?: FilterInterface
) => ({
  type: transactionTypes.TRANSACTIONS_USER_ALL_GET,
  payload: { id, options, filter }
});

export const getTransactionsUserAllSuccess = (
  data: Array<TransactionDataState>
) => ({
  type: transactionTypes.TRANSACTIONS_USER_ALL_GET_SUCCESS,
  payload: {
    data
  }
});

export const getTransactionsUserAllFail = (error: object) => ({
  type: transactionTypes.TRANSACTIONS_USER_ALL_GET_FAIL,
  error
});

export const getTransaction = (id: string) => ({
  type: transactionTypes.TRANSACTION_GET,
  payload: { id }
});

export const getTransactionSuccess = (data: TransactionDataState) => ({
  type: transactionTypes.TRANSACTION_GET_SUCCESS,
  payload: {
    data
  }
});

export const getTransactionFail = (error: object) => ({
  type: transactionTypes.TRANSACTION_GET_FAIL,
  error
});

export const importTransactions = (file: File, id: string) => ({
  type: transactionTypes.TRANSACTIONS_IMPORT,
  payload: {
    file,
    id
  }
});

export const importTransactionsSuccess = () => ({
  type: transactionTypes.TRANSACTIONS_IMPORT_SUCCESS
});

export const importTransactionsFail = (error: object) => ({
  type: transactionTypes.TRANSACTIONS_IMPORT_FAIL,
  error
});
