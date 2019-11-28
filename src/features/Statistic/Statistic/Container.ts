import { connect } from "react-redux";
import { State } from "../../../reducer";
import * as statisticActions from "../actions";
import { statisticSelector, statisticIsRequesting } from "../selectors";
import { StatisticDataState } from "../reducer";
import Statistic from "./Statistic";

export interface ListContainerStateToProps {
  statistic: Array<StatisticDataState>;
  isRequesting: boolean;
}

const mapStateToProps = (state: State): ListContainerStateToProps => ({
  statistic: statisticSelector(state),
  isRequesting: statisticIsRequesting(state)
});

const mapDefaultProps = {
  getStatisticAll: statisticActions.getStatisticAll,
  getStatisticPeriod: statisticActions.getStatisticPeriod
};

export default connect(
  mapStateToProps,
  mapDefaultProps
)(Statistic);
