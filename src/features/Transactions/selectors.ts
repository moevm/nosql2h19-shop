import { createSelector } from "reselect";
import { TransactionsState } from "./reducer";
import { State } from "../../reducer";

const transactionsGetter = (state: State): TransactionsState => state.transactions;

export const transactionsSelector = createSelector(
    transactionsGetter,
  (transactions: TransactionsState) => {
    return transactions.data;
  }
);
