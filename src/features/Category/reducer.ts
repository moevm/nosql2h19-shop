import * as categoriesTypes from "./actionTypes";

export interface CategoriesState {
  data: Array<string>,
  isRequesting: boolean,
  isRequestingImport: boolean
}

interface CategoriesPayload {
  data?:  Array<string>,
}

interface CategoriesAction {
  type: string,
  payload?: CategoriesPayload,
  error?: object
}

const initialState: CategoriesState = {
  data: [],
  isRequesting: false,
  isRequestingImport: false
};

export default (state: CategoriesState = initialState, action: CategoriesAction) => {
  const { type, payload = {}, error } = action;
  switch (type) {
    case categoriesTypes.CATEGORIES_ALL_GET:
      return {
        ...state,
        isRequesting: true
      };
    case categoriesTypes.CATEGORIES_ALL_GET_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        // @ts-ignore
        data: [...payload.data]
      };
    case categoriesTypes.CATEGORIES_ALL_GET_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: error
      };
    default:
      return state;
  }
};
