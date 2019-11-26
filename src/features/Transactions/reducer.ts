import * as transactionTypes from "./actionTypes";

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
  isRequesting: boolean
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
  isRequesting: false
};

export default (state: TransactionsState = initialState, action: TransactionsAction) => {
  const { type, payload = {}, error } = action;
  switch (type) {
    case transactionTypes.TRANSACTIONS_USER_ALL_GET:
      return {
        ...state,
        isRequesting: true
      };
    case transactionTypes.TRANSACTIONS_USER_ALL_GET_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: payload.data
      };
    case transactionTypes.TRANSACTIONS_USER_ALL_GET_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: error
      };
    default:
      return state;
  }
};
