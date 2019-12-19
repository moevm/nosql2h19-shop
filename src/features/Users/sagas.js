import * as usersTypes from "./actionTypes";
import * as usersActions from "./actions";
import { put, takeLatest } from "@redux-saga/core/effects";
import * as API from "./api";
import * as mocks from "../../mocks";
import { fetchReqAsync } from "../../commons/api";
import { fetchResAsync } from "~/commons/api";
import {exportToCsv} from "~/commons/utils";

export function* getUsers() {
  try {
    const { users } = yield fetchReqAsync(API.getUsers);
    yield put(usersActions.getUsersSuccess(users));
  } catch (error) {
    console.log(error);
    yield put(usersActions.getUsersFail(error));
  }
}

export function* getUser({ payload: { id } }) {
  try {
    const { user } = yield fetchReqAsync(API.getUser, { id });
    yield put(usersActions.getUserSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(usersActions.getUserFail(error));
  }
}

export function* importUsers({ payload: { file } }) {
  try {
    yield fetchResAsync(API.importUsers, file);
    yield put(usersActions.importUsersSuccess());
    yield put(usersActions.getUsers())
  } catch (error) {
    yield put(usersActions.importUsersFail(error));
  }
}

export function* exportUsers() {
  try {
    const res = yield fetchReqAsync(API.exportUsers, {
      collection: "users"
    });
    exportToCsv('users.csv', [Object.keys(res[0]), ...res.map(e => Object.values(e))])
  } catch (error) {
    console.log(error);
  }
}

function* watchUsers() {
  yield takeLatest(usersTypes.USERS_EXPORT, exportUsers);
  yield takeLatest(usersTypes.USERS_IMPORT, importUsers);
  yield takeLatest(usersTypes.USERS_GET, getUsers);
  yield takeLatest(usersTypes.USER_GET, getUser);
}

export default watchUsers;
