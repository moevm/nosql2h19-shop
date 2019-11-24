import { createSelector } from "reselect";
import { UsersState, Gender } from "./reducer";
import { State } from "../../reducer";

export interface UserPropsGetterInterface {
  id: string;
}

const usersGetter = (state: State): UsersState => state.users;
const userPropsGetter = (
  state: State,
  ownProps: UserPropsGetterInterface
): UserPropsGetterInterface => ownProps;

export const usersSelector = createSelector(
  usersGetter,
  (users: UsersState) => {
    return users.data;
  }
);

export const usersIsRequesting = createSelector(
  usersGetter,
  (users: UsersState) => {
    return users.isRequesting;
  }
);

export const userById = createSelector(
  usersGetter,
  userPropsGetter,
  (users: UsersState, props: UserPropsGetterInterface) => {
    return (
      users.data.find(user => user.id === props.id) || {
        name: "",
        id: "",
        age: 0,
        sex: Gender.MALE,
        spendings: 0
      }
    );
  }
);
