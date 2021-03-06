import React from 'react';
import classes from './InputCurrent.module.scss'

const InputCurrent =(props) => {
    return(
        <div className={classes.InputBox__current}>
            <label htmlFor='currentRate'>Current Rate:</label>
            <p>1 EURO = x zl</p>
            <input id='currentRate' placeholder='PLN' onChange={event => props.input(event)} ref={props.ref} required></input>
        </div>
    )
};

export default InputCurrent;