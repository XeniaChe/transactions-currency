import React from 'react';
import classes from './InputUserValue.module.scss';


const InputUserValue =(props) => {
    return(
        <div className={classes.single_value}>
            <label htmlFor={props.id} >{props.label}</label>
            <input id={props.id} placeholder={props.placeholder} onChange={event => props.input(event)}></input>
        </div>
    )
};

export default InputUserValue;