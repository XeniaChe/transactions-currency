import React, {Component, Fragment} from 'react';
import classes from './TransactionBuild.module.scss';
import InputMainBox from '../Components/Input/InputMainBox';
import InputCurrent from '../Components/Input/CurrentRate/InputCurrent';
import InputUserValue from '../Components/Input/UserValue/InputUserValue';
import StateContext from '../Components/Context/State-context';
import TransactionSummary from '../Components/UI/TransactionSummary';



class TransactionInput extends  Component {
    state = {
        currentRate: 0,
        transactionName: '',
        transactionValue: 0,
        transactions: [],
        total: 0,
        maxTransaction: {},
    }

    currentChengeRecalculation (newRate) {
        if (this.state.currentRate !== newRate && this.state.transactions.length > 0 ) {
            let totalSum = 0;
            for (const key of this.state.transactions ) {
                key.valuePln = parseFloat(( newRate * key.valueEuro).toFixed(2));
                
                //recalc of total sum
                totalSum +=  key.valuePln;
            }
            let totalSumFix = parseFloat(totalSum.toFixed(2));
            this.setState({total: totalSumFix});
        };
    }

    inputCurrentHandler = (e) => {
        const valueCurrent = e.target.value;
        const valueCurFix= parseFloat(parseFloat(valueCurrent).toFixed(2));
        this.setState({currentRate: valueCurFix });

        //recalculation
        this.currentChengeRecalculation(valueCurFix);
    }

    inputNameHandler = (e) => {
        const valueName = e.target.value;
        this.setState({transactionName: valueName})
    }

    inputValueHandler = (e) => {
        const value = e.target.value;
        const  valueFix= parseFloat(parseFloat(value).toFixed(2)) ;
        this.setState({transactionValue: valueFix})
    }

    totalSumCalculation = (trans) => {
        let totalSum = 0;
        for (const key of trans ){
            totalSum +=  key.valuePln;
        }
        let totalSumFix = parseFloat(totalSum.toFixed(2));
        this.setState({total: totalSumFix});
    }

    //Determining transaction with max value
    maxValueCalculation = (transactions) => {
        let valueArr = []; 
        if (transactions.length > 0 ) {
            for (let key of transactions ) {
                valueArr.push(key.valuePln)
            };
    
            let maxValue =  valueArr.reduce((a, b) => {
                return Math.max(a, b);
            }) 
    
            let indexOfMax = valueArr.findIndex( el => el === maxValue);
            let maxObject = transactions.find((_,index) => index === indexOfMax);

            this.setState({ maxTransaction: maxObject});

        //set empty object if the latest transaction was deleted
        }else if (transactions.length === 0){
            this.setState({ maxTransaction: {} });
        };
    }

    addTransactionHandler = () => {
        //creat transaction object
        if ( this.state.currentRate !== 0 && this.state.transactionValue !== 0 &&  this.state.transactionName.length>0
            && !isNaN(this.state.currentRate ) && !isNaN(this.state.transactionValue)) {
            const CurrencyCalc = parseFloat((this.state.currentRate * this.state.transactionValue).toFixed(2));
            const transaction = {
                name: this.state.transactionName,
                valueEuro: this.state.transactionValue,
                valuePln: CurrencyCalc, 
            }
    
            //push it to the state transactions array
            const newTransactions = [...this.state.transactions];
            newTransactions.push(transaction);
    
            //update the state
            this.setState({
                transactions: newTransactions,
                transactionName: '',
                transactionValue: 0,
                });
    
            //clear the input
            let userInputName = document.getElementById('userInputName');
            userInputName.value =  null;
            let userInputValue = document.getElementById('userInpuValue');
            userInputValue.value =  null;
    
            //calculating transactions total sum
            this.totalSumCalculation(newTransactions);
    
            //calculation  of the max value
            this.maxValueCalculation(newTransactions);

        }else if (isNaN(this.state.currentRate ) || isNaN(this.state.transactionValue)){
            alert(`Please, enter valid values`)
        } else {
            alert(`Please, fill in all the values`)
        }
    }

    deleteTransactionItemHandler = (e, index) => {
        //delete el-t from the state
        const elIndex = index;
        const newTransactions = [ ...this.state.transactions];
        newTransactions.splice(elIndex, 1);
        this.setState({transactions: newTransactions});

        //recalculation  of the total sum
        this.totalSumCalculation(newTransactions);

        //recalculation  of the max value
        this.maxValueCalculation(newTransactions);

    }
    
    render() {
        return(
            <Fragment>
                <StateContext.Provider value={{
                                    currentRate: this.state.currentRate,
                                    transactionName: this.state.transactionName,
                                    transactionValue: this.state.transactionValue,
                                    transactions: this.state.transactions,
                                    total: this.state.total,
                                    maxTransaction: this.state.maxTransaction     
                                    }}>
                    <div className={classes.InputBox}>
                        <InputCurrent   input={this.inputCurrentHandler} 
                                        checking={this.state.currentRate}/>
                        <InputMainBox addTransaction={this.addTransactionHandler}>
                            <InputUserValue input={this.inputNameHandler}
                                            checking={this.state.transactionName}
                                            id='userInputName' 
                                            label="Transaction's title:"
                                            placeholder='title'/>
                            <InputUserValue input={this.inputValueHandler}
                                            checking={this.state.transactionValue}
                                            id='userInpuValue'
                                            placeholder='EURO' 
                                            label="Transaction's value:"/>
                        </InputMainBox>
                    </div>
                    <TransactionSummary delete={this.deleteTransactionItemHandler} />
                </StateContext.Provider>
            </Fragment>

        )
    }

};


export default TransactionInput;