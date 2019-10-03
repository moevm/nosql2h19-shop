import {usersTypes} from "./index";

const getUsers = () => ({
    type: usersTypes.USERS_GET
});

const getUsersSuccess = ( data: object ) => ({
    type: usersTypes.USERS_GET_SUCCESS,
    payload: {
        data
    }
});

const getUsersFail = (error: object) => ({
    type: usersTypes.USERS_GET_FAIL,
    error
});

export default { getUsers, getUsersSuccess, getUsersFail}