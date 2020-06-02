import React, {Fragment} from 'react';
import classes from './InputMainBox.module.scss'

const InputMainBox =(props) => {
    return(
        <Fragment>
            <div className={classes.InputBox__values}>
            <h2>Add transaction</h2>
                {props.children}
            </div>
            <button className={classes.BtnAdd} onClick={props.addTransaction}> ADD </button>
        </Fragment>
    )
};

export default InputMainBox;