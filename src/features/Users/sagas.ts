import {usersTypes} from "./index";
import usersActions from './actions'
import {put, takeLatest} from "@redux-saga/core/effects";
import {fetchReqAsync} from "../../commons/api";
import * as API from './api';

export function* getUsers() {
    try {
        const res = yield API.getUsers();
        yield put(usersActions.getUsersSuccess(res));
        console.log(1);
    } catch (error) {
        yield put(usersActions.getUsersFail(error));
    }
}

function* watchUsers() {
    yield takeLatest(usersTypes.USERS_GET, getUsers);
}

export default watchUsers;