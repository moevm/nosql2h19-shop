import { combineReducers } from "redux";
import { users } from './features/Users'
import { transactions } from "./features/Transactions";
import { UsersState } from "./features/Users/reducer";
import {TransactionsState} from "./features/Transactions/reducer";

export interface State {
    users: UsersState,
    transactions: TransactionsState
}

export default combineReducers({
    users,
    transactions,
});
