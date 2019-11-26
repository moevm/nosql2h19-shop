import * as usersTypes from "./actionTypes";
import * as usersActions from './actions'
import { put, takeLatest } from "@redux-saga/core/effects";
import * as API from './api';
import * as mocks from "../../mocks";
import {fetchReqAsync} from "../../commons/api";

export function* getUsers() {
    try {
        const { users } = yield fetchReqAsync(API.getUsers) ;
        yield put(usersActions.getUsersSuccess(users));
    } catch (error) {
        console.log(error);
        yield put(usersActions.getUsersFail(error));
    }
}

export function* getUser() {
    try {
        const { user } = yield mocks.getUser();
        yield put(usersActions.getUserSuccess(user));
    } catch (error) {
        yield put(usersActions.getUserFail(error));
    }
}

function* watchUsers() {
    yield takeLatest(usersTypes.USERS_GET, getUsers);
    yield takeLatest(usersTypes.USER_GET, getUser);
}

export default watchUsers;