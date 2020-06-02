import React from 'react';
import classes from './MaxTransactionView.module.scss';
import TransactionItem from '../../SummaryCalculation/TransactionItem/TransactionItem';

const MaxTransactionView = (props) => {
    return(
        <div className={classes.MaxTransView}>
            <h3>Maximum transaction</h3>
            <TransactionItem />
            
        </div>
    )
};

export default MaxTransactionView;