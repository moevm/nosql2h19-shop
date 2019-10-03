import { all, fork } from "redux-saga/effects";
import { usersSagas } from "~/features/Users";

export default function* rootSaga() {
  yield all(
    [
        usersSagas
    ].map(saga => fork(saga))
  );
}
