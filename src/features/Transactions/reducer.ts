import * as transactionTypes from "./actionTypes";
import * as usersTypes from "../Users/actionTypes";

export interface TransactionDataState {
  category: string,
  userId: string,
  created: {
    _seconds: number,
    _nanoseconds: number
  },
  accountId: string,
  amount: number,
  id: string
}

export interface TransactionsState {
  data: Array<TransactionDataState>,
  isRequesting: boolean,
  isRequestingImport: boolean
}

interface TransactionsPayload {
  data?:  Array<TransactionDataState>,
}

interface TransactionsAction {
  type: string,
  payload?: TransactionsPayload,
  error?: object
}

const initialState: TransactionsState = {
  data: [],
  isRequesting: false,
  isRequestingImport: false
};

export default (state: TransactionsState = initialState, action: TransactionsAction) => {
  const { type, payload = {}, error } = action;
  switch (type) {
    case transactionTypes.TRANSACTION_GET:
    case transactionTypes.TRANSACTIONS_USER_ALL_GET:
      return {
        ...state,
        isRequesting: true
      };
    case transactionTypes.TRANSACTION_GET_SUCCESS:
      console.log(1);
      return {
        ...state,
        isRequesting: false,
        data: [payload.data]
      };
    case transactionTypes.TRANSACTIONS_USER_ALL_GET_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: payload.data
      };
    case transactionTypes.TRANSACTION_GET_FAIL:
    case transactionTypes.TRANSACTIONS_USER_ALL_GET_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: error
      };
    case transactionTypes.TRANSACTIONS_IMPORT:
      return {
        ...state,
        isRequestingImport: true
      }
    case transactionTypes.TRANSACTIONS_IMPORT_SUCCESS:
    case transactionTypes.TRANSACTIONS_IMPORT_FAIL:
      return {
        ...state,
        isRequestingImport: false
      }
    default:
      return state;
  }
};
