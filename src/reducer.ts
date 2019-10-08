import { combineReducers } from "redux";
import { users } from './features/Users'
import { UsersState } from "./features/Users/reducer";

export interface State {
    users: UsersState
}

export default combineReducers({
    users
});
