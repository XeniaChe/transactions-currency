import React, {Component} from 'react';
import classes from './TransactionBuild.module.scss';
import InputMainBox from '../Components/Input/InputMainBox';
import InputCurrent from '../Components/Input/CurrentRate/InputCurrent';
import InputUserValue from '../Components/Input/UserValue/InputUserValue';
import PropTypes from 'prop-types';


class TransactionInput extends  Component {
    state ={
        currentRate: 0,
        transactionName: '',
        transactionValue: 0,
        // inputElRef: React.createRef(),
    }
    // componentDidMount(){
    //     this.inputElRef.current.focus();
    // }

    inputCurrentHandler =(event) => {
        const valueCurrent = event.target.value;
        const valueCurFix= parseFloat(valueCurrent).toFixed(2);
        this.setState({currentRate: valueCurFix });
    }

    inputNameHandler = (e) => {
        const valueName = e.target.value;
        this.setState({transactionName: valueName})
    }
    inputValueHandler =(e) => {
        const value = e.target.value;
        const  valueFix= parseFloat(value).toFixed(2)
        this.setState({transactionValue: valueFix})
    }

    render() {
        // console.log(`current rate is ${this.state.currentRate}` )
        return(
            <div className={classes.InputBox}>
                <InputCurrent  input={this.inputCurrentHandler} checking={this.state.currentRate} ref={this.inputElRef}/>
                <InputMainBox>
                    <InputUserValue input={this.inputNameHandler}
                                    checking={this.state.transactionName}
                                    id='name' 
                                    label='Transaction Name:'/>
                    <InputUserValue input={this.inputValueHandler}
                                    checking={this.state.transactionValue}
                                    id='value' 
                                    label='Transaction Value:'/>
                </InputMainBox>
            </div>
        )
    }

};

InputUserValue.propTypes ={

}


export default TransactionInput;