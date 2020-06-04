import React, {useContext} from 'react';
import classes from './TransactionSummary.module.scss';
import TransactionsListView from './TransactionsListView/TransactionsListView';
import MaxTransactionView from './MaxTransactionView/MaxTransactionView';
import StateContext from '../Context/State-context';


const TransactionSummary = (props) => {
    const stateContext = useContext(StateContext);

    let style = [classes.TransactionSummary];
    if (stateContext.transactions.length === 0) {
        style.push(classes.not_active);
    }
    return(
        <div className={style.join(' ')} >
            <TransactionsListView delete={props.delete} />
            <MaxTransactionView />
        </div>
    )
};

export default TransactionSummary;