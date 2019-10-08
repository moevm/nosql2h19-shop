import {usersTypes} from "./index";

export interface UsersDataState {
  id: number,
  fullName: string,
  sex: string,
  age: number
}

export interface UsersState {
  data: object,
  isRequesting: boolean
}

interface UsersPayload {
  data?: object,
}

interface UsersAction {
  type: string,
  payload?: UsersPayload,
  error?: object
}

const initialState: UsersState = {
  data: {},
  isRequesting: false
};

export default (state: UsersState = initialState, action: UsersAction) => {
  const { type, payload = {}, error } = action;
  switch (type) {
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
    case usersTypes.USERS_GET_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: error
      };
    default:
      return state;
  }
};
