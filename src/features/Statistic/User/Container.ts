import { connect } from "react-redux";
import { State } from "../../../reducer";
import UserStat from "./UserStat";
import * as statisticActions from "../actions";
import { statisticSelector, statisticIsRequesting } from "../selectors";
import { StatisticDataState } from "../reducer";
import { userById, UserPropsGetterInterface } from "../../Users/selectors";
import { UsersDataState } from "../../Users/reducer";

export interface ListContainerStateToProps {
  user: UsersDataState;
  statistic: Array<StatisticDataState>;
  isRequesting: boolean;
}

const mapStateToProps = (
  state: State,
  ownProps: UserPropsGetterInterface
): ListContainerStateToProps => ({
  user: userById(state, ownProps),
  statistic: statisticSelector(state),
  isRequesting: statisticIsRequesting(state)
});

const mapDefaultProps = {
  getStatisticUserAll: statisticActions.getStatisticUserAll,
  getStatisticUserPeriod: statisticActions.getStatisticUserPeriod
};

export default connect(
  mapStateToProps,
  mapDefaultProps
)(UserStat);
