import { createSelector } from "reselect";

const usersGetter = (state) => state.users;

export const usersSelector = createSelector(
    usersGetter,
    ({ data }) => {
        return Object.values(data) || [];
    }
);
