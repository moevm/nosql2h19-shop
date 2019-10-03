import {usersTypes} from "./index";

interface UserState {
  data: object,
  isRequesting: boolean
}

interface UserPayload {
  data?: object,
}

interface UserAction {
  type: string,
  payload?: UserPayload,
  error?: object
}

const initialState: UserState = {
  data: {},
  isRequesting: false
};

export default (state: UserState = initialState, action: UserAction) => {
  const { type, payload = {}, error } = action;
  switch (type) {
    case usersTypes.USERS_GET:
      return {
        ...state,
        isRequesting: true
      }
    case usersTypes.USERS_GET_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: payload.data
      }
    case usersTypes.USERS_GET_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: error
      }
    default:
      return state;
  }
};
