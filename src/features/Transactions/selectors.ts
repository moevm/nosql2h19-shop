import { createSelector } from "reselect";
import { TransactionsState } from "./reducer";
import { State } from "../../reducer";
import {Gender } from "../Users/reducer";

export interface TransactionPropsGetterInterface {
    id: string;
}

const transactionsGetter = (state: State): TransactionsState => state.transactions;
const transactionPropsGetter = (
    state: State,
    ownProps: TransactionPropsGetterInterface
): TransactionPropsGetterInterface => ownProps;

export const transactionsSelector = createSelector(
    transactionsGetter,
  (transactions: TransactionsState) => {
    return transactions.data;
  }
);

export const transactionsIsRequesting = createSelector(
    transactionsGetter,
    (transactions: TransactionsState) => {
        return transactions.isRequesting;
    }
);

export const transactionById = createSelector(
    transactionsGetter,
    transactionPropsGetter,
    (transactions: TransactionsState, props: TransactionPropsGetterInterface) => {
        return (
            transactions.data.find(transaction => transaction.id === props.id) || {
                category: '',
                userId: '',
                created: {
                    _seconds: 0,
                    _nanoseconds: 0
                },
                accountId: '',
                amount: 0,
                id: ''
            }
        );
    }
);
