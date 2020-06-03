import React, {Fragment, useContext} from 'react';
import classes from './InputMainBox.module.scss';
import StateContext from '../Context/State-context';

const InputMainBox =(props) => {
    const stateContext = useContext(StateContext);
    //Checking button if disavbled
    let btnDisabled = false;
    if ((stateContext.currentRate || stateContext.transactionValue) === 0 
    || stateContext.transactionName.length <=0 ) 
    { btnDisabled = !btnDisabled };

    return(
        <Fragment>
            <div className={classes.InputBox__values}>
            <h2>Transaction details</h2>
                {props.children}
            </div>
            <button className={classes.BtnAdd} onClick={props.addTransaction} disabled={btnDisabled}> ADD </button>
        </Fragment>
    )
};

export default InputMainBox;
