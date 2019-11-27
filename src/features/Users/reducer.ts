import * as usersTypes from "./actionTypes";

export enum Gender {
  MALE = "male",
  FEMALE = "female"
}

export interface UsersDataState {
  id: string;
  name: string;
  sex: Gender;
  age: number;
  spendings: number;
  accounts: Array<number>;
}

export interface UsersState {
  data: Array<UsersDataState>;
  isRequesting: boolean;
  isRequestingImport: boolean;
}

interface UsersPayload {
  data?: UsersDataState;
}

interface UsersAction {
  type: string;
  payload?: UsersPayload;
  error?: object;
}

const initialState: UsersState = {
  data: [],
  isRequesting: false,
  isRequestingImport: false
};

export default (state: UsersState = initialState, action: UsersAction) => {
  const { type, payload = {}, error } = action;
  switch (type) {
    case usersTypes.USER_GET:
    case usersTypes.USERS_GET:
      return {
        ...state,
        isRequesting: true
      };
    case usersTypes.USERS_GET_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: payload.data
      };
    case usersTypes.USER_GET_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: [
          ...state.data.filter(({ id }) => id !== payload.data!.id),
          payload.data
        ]
      };
    case usersTypes.USER_GET_FAIL:
    case usersTypes.USERS_GET_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: error
      };
    case usersTypes.USERS_IMPORT:
      return {
        ...state,
        isRequestingImport: true
      };
    case usersTypes.USERS_IMPORT_FAIL:
    case usersTypes.USERS_IMPORT_SUCCESS:
      return {
        ...state,
        isRequestingImport: false
      };
    default:
      return state;
  }
};
