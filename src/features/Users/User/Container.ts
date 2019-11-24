import { connect } from 'react-redux'
import { State } from "../../../reducer";
import User from "./User";
import { userById, UserPropsGetterInterface } from "../selectors";
import {UsersDataState} from "../reducer";

export interface ListContainerStateToProps {
    user: UsersDataState
}

const mapStateToProps = (state: State, ownProps: UserPropsGetterInterface): ListContainerStateToProps => ({
    user: userById(state, ownProps)
})

const mapDefaultProps = {
}

export default connect(mapStateToProps, mapDefaultProps)(User)