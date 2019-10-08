import { connect } from 'react-redux'
import List from "./List";
import usersActions  from "./actions";
import { usersSelector } from "./selectors";
import { State } from "../../reducer";
import {UsersDataState} from "./reducer";

const mapStateToProps = (state: State): { users: Array<UsersDataState>} => ({
    users: usersSelector(state)
})

const mapDefaultProps = {
    getUsers: usersActions.getUsers
}

export default connect(mapStateToProps, mapDefaultProps)(List)