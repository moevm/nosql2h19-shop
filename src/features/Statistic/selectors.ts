import { createSelector } from "reselect";
import { StatisticState } from "./reducer";
import { State } from "../../reducer";

const statisticGetter = (state: State): StatisticState => state.statistic;

export const statisticSelector = createSelector(
    statisticGetter,
  (statistic: StatisticState) => {
    return statistic.data;
  }
);

export const statisticIsRequesting = createSelector(
    statisticGetter,
    (statistic: StatisticState) => {
        return statistic.isRequesting;
    }
);
