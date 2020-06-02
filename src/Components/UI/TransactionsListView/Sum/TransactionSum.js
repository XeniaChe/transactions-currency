import React, {useContext} from 'react';
import classes from './TransactionSum.module.scss';
import StateContext from '../../../Context/State-context';

const TransactionSum = (props) => {
    const stateContext = useContext(StateContext)
    return(
        <div className={classes.Summ}>
            <h3>Total:</h3>
            <p> {stateContext.total ? `${stateContext.total} zl ` : `0.00 zl ` }  </p>
        </div>
    )
};

export default TransactionSum;