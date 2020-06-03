import React  from 'react';
import classes from './TransactionItem.module.scss';

const TransactionItem = (props) => {
    return(
            <div className={classes.TransactionItem}>
                <p className={classes.Title}>{props.transName}</p>
                <p className={classes.EuroValue}>{props.transEuroValue} euro</p>
                <p className={classes.PlnValue}>{props.transPlnValue} zl</p>
                <button className={classes.BtnClose} onClick={(event) => props.delete(event)}>&times;</button>
            </div>
    )
};

export default TransactionItem;