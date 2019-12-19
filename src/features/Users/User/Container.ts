import { connect } from 'react-redux'
import { State } from "../../../reducer";
import User from "./User";
import * as usersActions  from "../actions";
import * as transactionActions  from "../../Transactions/actions";
import * as categoriesActions  from "../../Category/actions";
import {userById, UserPropsGetterInterface, usersIsRequesting} from "../selectors";
import {UsersDataState} from "../reducer";
import {transactionsIsRequesting, transactionsSelector} from "../../Transactions/selectors";
import {TransactionDataState} from "../../Transactions/reducer";
import {categoriesSelector} from "../../Category/selectors";

export interface ListContainerStateToProps {
    user: UsersDataState,
    transactions: Array<TransactionDataState>,
    categories: Array<string>
    isRequestingTransactions: boolean,
    isRequesting: boolean
}

const mapStateToProps = (state: State, ownProps: UserPropsGetterInterface): ListContainerStateToProps => ({
    user: userById(state, ownProps),
    transactions: transactionsSelector(state),
    categories: categoriesSelector(state),
    isRequesting: usersIsRequesting(state),
    isRequestingTransactions: transactionsIsRequesting(state)
})

const mapDefaultProps = {
    getUser: usersActions.getUser,
    getUserTransactions: transactionActions.getTransactionsUserAll,
    importTransactions: transactionActions.importTransactions,
    exportTransactions: transactionActions.exportTransactions,
    getCategories: categoriesActions.getCategories,
}

export default connect(mapStateToProps, mapDefaultProps)(User)