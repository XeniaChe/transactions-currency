import React, {useContext} from 'react';
import classes from './TransactionItem.module.scss';
import StateContext from '../../Context/State-context';

const TransactionItem = (props) => {
    const satetContext = useContext(StateContext);
    return(
            <div className={classes.TransactionItem}>
                <p className={classes.Title}>{props.transName}</p>
                <p className={classes.EuroValue}>{props.transEuroValue} euro</p>
                <p className={classes.PlnValue}>{props.transPlnValue} zl</p>
                <button className={classes.BtnClose} onClick={satetContext.deleteItem}>&times;</button>
            </div>
    )
};

export default TransactionItem;