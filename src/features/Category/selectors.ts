import { createSelector } from "reselect";
import { CategoriesState } from "./reducer";
import { State } from "../../reducer";

const categoriesGetter = (state: State): CategoriesState => state.categories;

export const categoriesSelector = createSelector(
    categoriesGetter,
    (categories: CategoriesState) => {
        return categories.data;
    }
);
