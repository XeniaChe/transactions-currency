import React, {useContext} from 'react';
import classes from './TransactionSum.module.scss';
import StateContext from '../../../Context/State-context';

const TransactionSum = (props) => {
    const stateContext = useContext(StateContext);
    let style = [classes.Summ];

    if (!stateContext.total) {
        style.push(classes.not_active);
    }

    return(
        <div className={style.join(' ')}>
            <h3>Total:</h3>
            { stateContext.total ? <p> {stateContext.total} zl </p> : null }
        </div>
    )
};

export default TransactionSum;