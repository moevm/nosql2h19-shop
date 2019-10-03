import { connect } from 'react-redux'
import List from "./List";
import usersActions  from "./actions";
import { MainTableData } from "../../components/Tabels/MainTable";
import {usersSelector} from "./selectors";

const mapStateToProps = (state: any): { users: Array<MainTableData>} => ({
    users: usersSelector(state)
})

const mapDefaultProps: {getUsers: () => any} = {
    getUsers: usersActions.getUsers
}

export default connect(mapStateToProps, mapDefaultProps)(List)