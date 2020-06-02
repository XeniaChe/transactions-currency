import React, {Component, Fragment} from 'react';
import classes from './TransactionBuild.module.scss';
import InputMainBox from '../Components/Input/InputMainBox';
import InputCurrent from '../Components/Input/CurrentRate/InputCurrent';
import InputUserValue from '../Components/Input/UserValue/InputUserValue';
import StateContext from '../Components/Context/State-context';
import TransactionSummary from '../Components/UI/TransactionSummary';



class TransactionInput extends  Component {
    state ={
        currentRate: 0,
        transactionName: '',
        transactionValue: 0,
        transactions: []
    }

    inputCurrentHandler = (e) => {
        const valueCurrent = e.target.value;
        const valueCurFix= parseFloat(valueCurrent).toFixed(2);
        this.setState({currentRate: valueCurFix });
    }

    inputNameHandler = (e) => {
        const valueName = e.target.value;
        this.setState({transactionName: valueName})
    }

    inputValueHandler = (e) => {
        const value = e.target.value;
        const  valueFix= parseFloat(value).toFixed(2)
        this.setState({transactionValue: valueFix})
    }

    addTransactionHandler = () => {
        
        //creat transaction object
        const CurrencyCalc = parseFloat(this.state.currentRate * this.state.transactionValue).toFixed(2);
        const transaction = {
            id: '',
            name: this.state.transactionName,
            valueEuro: this.state.transactionValue,
            valuePln: CurrencyCalc, 
        }

        //push it to the state transactions array
        const newTransactions = [...this.state.transactions];
        newTransactions.push(transaction);

        //update the state
        this.setState({transactions: newTransactions});

        //clear the input
        let userInputName = document.getElementById('userInputName');
        userInputName.value =  ' ';
        let userInputValue = document.getElementById('userInpuValue');
        userInputValue.value =  ' ';

    }

    deleteTransactionItemHandler = () => {

    }
    render() {
        return(
            <Fragment>
                <div className={classes.InputBox}>
                    <InputCurrent  input={this.inputCurrentHandler} checking={this.state.currentRate} ref={this.inputElRef}/>
                    <InputMainBox addTransaction={this.addTransactionHandler}>
                        <InputUserValue input={this.inputNameHandler}
                                        checking={this.state.transactionName}
                                        id='userInputName' 
                                        label='Transaction Name:'
                                        placeholder='title'/>
                        <InputUserValue input={this.inputValueHandler}
                                        checking={this.state.transactionValue}
                                        id='userInpuValue'
                                        placeholder='EURO' 
                                        label='Transaction Value:'/>
                    </InputMainBox>
                </div>
                <StateContext.Provider value={{
                                            currentRate: this.state.currentRate,
                                            transactionName: this.state.transactionName,
                                            transactionValue: this.state.transactionValue,
                                            transactions: this.state.transactions,
                                            deleteItem: this.deleteTransactionItemHandler,         
                                            }}>
                    <TransactionSummary />
                </StateContext.Provider>
            </Fragment>

        )
    }

};


export default TransactionInput;