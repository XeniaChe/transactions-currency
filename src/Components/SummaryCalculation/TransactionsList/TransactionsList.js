import React, {Fragment,useContext} from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import StateContext from '../../Context/State-context';

const TransactionList = (props) => {
    const stateContext = useContext(StateContext);

    let transList = null;
    let list;

    if( stateContext.transactions !== undefined) {
        list = stateContext.transactions
    };

    transList = list.map( (el, index) =>{
        return <TransactionItem 
                    transName={el.name}
                    transEuroValue={el.valueEuro}
                    transPlnValue={el.valuePln}
                    key={index}
                    delete={(event) => props.delete(event, index)}/>
    });
    
    return(
        <Fragment>
            {transList}
        </Fragment>
    )
};

export default TransactionList;
