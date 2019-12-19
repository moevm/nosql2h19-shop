import * as categoriesTypes from "./actionTypes";
import * as categoriesActions from "./actions";
import { put, takeLatest } from "@redux-saga/core/effects";
import * as API from "./api";
import { fetchReqAsync } from "../../commons/api";

export function* getCategoriesAll() {
  try {
    const { categories } = yield fetchReqAsync(API.getСategories);
    yield put(categoriesActions.getCategoriesSuccess(categories));
  } catch (error) {
    console.log(error);
    yield put(categoriesActions.getCategoriesFail(error));
  }
}

function* watchTransactions() {
  yield takeLatest(categoriesTypes.CATEGORIES_ALL_GET, getCategoriesAll);
}

export default watchTransactions;
