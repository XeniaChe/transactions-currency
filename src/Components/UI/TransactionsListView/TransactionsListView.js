import React from 'react';
import classes from './TransactionsListView.module.scss';
import TransactionsList from '../../SummaryCalculation/TransactionsList/TransactionsList';
import TransactionSum from './Sum/TransactionSum';

const TransactionsListView = (props) => {
    return(
        <div className={classes.List__box}>
            <h3>Added transactions list</h3>
            <TransactionsList delete={props.delete}/>
            <TransactionSum />
        </div>
    )
};

export default TransactionsListView;