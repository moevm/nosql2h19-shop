import { connect } from 'react-redux'
import { State } from "../../../reducer";
import Transaction from "./Transaction";
import {getTransaction} from "../actions";
import {TransactionDataState} from "../reducer";
import {transactionById, transactionsIsRequesting, TransactionPropsGetterInterface} from '../selectors'

export interface ListContainerStateToProps {
    transaction: TransactionDataState,
    isRequesting: boolean
}

const mapStateToProps = (state: State, ownProps: TransactionPropsGetterInterface): ListContainerStateToProps => ({
    transaction: transactionById(state, ownProps),
    isRequesting: transactionsIsRequesting(state)
})

const mapDefaultProps = {
    getTransaction: getTransaction
}

export default connect(mapStateToProps, mapDefaultProps)(Transaction)