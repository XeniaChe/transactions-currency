import React, {useContext} from 'react';
import classes from './MaxTransactionView.module.scss';
import MaxTransaction from '../../SummaryCalculation/MaxTransactionItem/MaxTransactionItem';
import StateContext from '../../Context/State-context';

const MaxTransactionView = (props) => {
    const stateContext = useContext(StateContext);

    //checking if max object is not empty
    let maxObjLengh = Object.keys(stateContext.maxTransaction).length;

    // active state toogle
    let style = [classes.MaxTransView];
    if (stateContext.transactions.length === 0) {
        style.push(classes.not_active);
    }

    return(
        <div className={style.join(' ')}>
            <h3>Your maximum transaction:</h3>
            { maxObjLengh > 0 ?  <MaxTransaction /> : null} 
        </div>
    )
};

export default MaxTransactionView;