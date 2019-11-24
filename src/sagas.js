import { all, fork } from "redux-saga/effects";
import { usersSagas } from "~/features/Users";
import { transactionSagas } from "./features/Transactions";

export default function* rootSaga() {
  yield all(
    [
        usersSagas,
        transactionSagas
    ].map(saga => fork(saga))
  );
}
