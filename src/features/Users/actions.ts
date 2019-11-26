import * as usersTypes from "./actionTypes";
import {UsersDataState, UsersState} from "./reducer";

export const getUsers = () => ({
    type: usersTypes.USERS_GET
});

export const getUsersSuccess = ( data: Array<UsersState> ) => ({
    type: usersTypes.USERS_GET_SUCCESS,
    payload: {
        data
    }
});

export const getUsersFail = (error: object) => ({
    type: usersTypes.USERS_GET_FAIL,
    error
});

export const getUser = (id: string) => ({
    type: usersTypes.USER_GET,
    payload: { id }
});

export const getUserSuccess = ( data: UsersDataState ) => ({
    type: usersTypes.USER_GET_SUCCESS,
    payload: {
        data
    }
});

export const getUserFail = (error: object) => ({
    type: usersTypes.USER_GET_FAIL,
    error
});