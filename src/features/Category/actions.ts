import * as categoriesTypes from "./actionTypes";

export const getCategories = (
) => ({
  type: categoriesTypes.CATEGORIES_ALL_GET
});

export const getCategoriesSuccess = (data: Array<string>) => ({
  type: categoriesTypes.CATEGORIES_ALL_GET_SUCCESS,
  payload: { data }
});

export const getCategoriesFail = (error: object) => ({
  type: categoriesTypes.CATEGORIES_ALL_GET_SUCCESS,
  error
});
