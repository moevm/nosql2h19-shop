import * as transactionTypes from "./actionTypes";
import { TransactionDataState } from "./reducer";

interface GetTransactionsUserAllOptions {
  withUser?: boolean;
}

export const getTransactionsUserAll = (
  id: string,
  options?: GetTransactionsUserAllOptions
) => ({
  type: transactionTypes.TRANSACTIONS_USER_ALL_GET,
  payload: { id, options }
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
