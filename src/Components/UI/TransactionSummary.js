import React from 'react';
import classes from './TransactionSummary.module.scss';
import TransactionsListView from './TransactionsListView/TransactionsListView';
import MaxTransactionView from './MaxTransactionView/MaxTransactionView';

const TransactionSummary = (props) => {
    return(
        <div className={classes.TransactionSummary}>
            <TransactionsListView />
            <MaxTransactionView />
        </div>
    )
};

export default TransactionSummary;