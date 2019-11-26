import { all, fork } from "redux-saga/effects";
import { usersSagas } from "~/features/Users";
import { transactionSagas } from "./features/Transactions";
import { statisticSagas } from "./features/Statistic";

export default function* rootSaga() {
  yield all(
    [usersSagas, transactionSagas, statisticSagas].map(saga => fork(saga))
  );
}
