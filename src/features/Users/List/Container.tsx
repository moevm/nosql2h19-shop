import { connect } from 'react-redux'
import List from "./List";
import * as usersActions  from "../actions";
import {usersIsRequesting, usersSelector} from "../selectors";
import { State } from "../../../reducer";
import {UsersDataState} from "../reducer";

export interface ListContainerStateToProps {
    users: Array<UsersDataState>,
    isRequesting: boolean
}

const mapStateToProps = (state: State): ListContainerStateToProps => ({
    users: usersSelector(state),
    isRequesting: usersIsRequesting(state),
})

const mapDefaultProps = {
    getUsers: usersActions.getUsers,
    importUsers: usersActions.importUsers,
    exportUsers: usersActions.exportUsers
}

export default connect(mapStateToProps, mapDefaultProps)(List)