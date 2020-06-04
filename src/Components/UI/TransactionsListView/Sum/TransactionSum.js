import React, {useContext, Fragment} from 'react';
import classes from './TransactionSum.module.scss';
import StateContext from '../../../Context/State-context';

const TransactionSum = (props) => {
    const stateContext = useContext(StateContext);
    return(
        <Fragment>
            { stateContext.total!==0 ? <div className={classes.Summ}>
                <h3>Total:</h3>
                <p> {stateContext.total} zl </p> 
            </div> : null}
        </Fragment>
    )
};

export default TransactionSum;