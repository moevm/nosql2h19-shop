import { createSelector } from "reselect";
import { objToArray } from "../../utils";
import { UsersState } from "./reducer";
import { State } from "../../reducer";

const usersGetter = (state: State): UsersState => state.users;

export const usersSelector= createSelector(
    usersGetter,
    (users: UsersState) => {
        return objToArray(users.data);
    }
);
