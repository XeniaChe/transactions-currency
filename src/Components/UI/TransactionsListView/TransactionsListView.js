import React from 'react';
import classes from './TransactionsListView.module.scss';
import TransactionsList from '../../SummaryCalculation/TransactionsList/TransactionsList';

const TransactionsListView = (props) => {
    return(
        <div className={classes.List__box}>
            <h3>Added transactions list</h3>
            <TransactionsList />
            <div className={classes.Summ}>Summ of all transactions</div>
        </div>
    )
};

export default TransactionsListView;