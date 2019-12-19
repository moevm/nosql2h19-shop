import { combineReducers } from "redux";
import { users } from "./features/Users";
import { transactions } from "./features/Transactions";
import { statistic } from "./features/Statistic";
import { categories } from "./features/Category";
import { UsersState } from "./features/Users/reducer";
import { TransactionsState } from "./features/Transactions/reducer";
import { StatisticState } from "./features/Statistic/reducer";
import { CategoriesState } from "./features/Category/reducer";

export interface State {
  users: UsersState;
  transactions: TransactionsState;
  statistic: StatisticState;
  categories: CategoriesState;
}

export default combineReducers({
  users,
  transactions,
  statistic,
  categories
});
