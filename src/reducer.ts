import { combineReducers } from "redux";
import { users } from "./features/Users";
import { transactions } from "./features/Transactions";
import { statistic } from "./features/Statistic";
import { UsersState } from "./features/Users/reducer";
import { TransactionsState } from "./features/Transactions/reducer";
import { StatisticState } from "./features/Statistic/reducer";

export interface State {
  users: UsersState;
  transactions: TransactionsState;
  statistic: StatisticState;
}

export default combineReducers({
  users,
  transactions,
  statistic
});
