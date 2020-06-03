import React, {useContext} from 'react';
import classes from './MaxTransactionItem.module.scss';
import StateContext from '../../Context/State-context';

const MaxTransaction = (props) => {
    const stateContext = useContext(StateContext);
    return(
            <div className={classes.MaxTransactionItem}>
                <p className={classes.Title}>{stateContext.maxTransaction.name}</p>
                <p className={classes.EuroValue}>{stateContext.maxTransaction.valueEuro} euro</p>
                <p className={classes.PlnValue}>{stateContext.maxTransaction.valuePln} zl</p>
            </div>
    )
};

export default MaxTransaction;