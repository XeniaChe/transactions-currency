import React, {useContext} from 'react';
import classes from './TransactionsListView.module.scss';
import TransactionsList from '../../SummaryCalculation/TransactionsList/TransactionsList';
import TransactionSum from './Sum/TransactionSum';
import StateContext from '../../Context/State-context';

const TransactionsListView = (props) => {
    const stateContext = useContext(StateContext);

    let style = [classes.List__box];
    if (stateContext.transactions.length === 0) {
        style.push(classes.not_active);
    }
    return(
        <div className={style.join(' ')}>
            <h3>Added transactions list:</h3>
            <TransactionsList delete={props.delete}/>
            <TransactionSum />
        </div>
    )
};

export default TransactionsListView;