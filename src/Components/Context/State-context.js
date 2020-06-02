import React from 'react';

const authContext = React.createContext({
    currentRate: 0,
    transactionName: '',
    transactionValue: 0,
    transactions: [],
    deleteItem: () => {
    }
})

export default authContext;