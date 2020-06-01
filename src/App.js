import React, {Component}from 'react';
import './App.css';
import classes from './App.module.css';
import TransactionBuild from './Container/TransactionBuild';
import TransactionSummary from './Components/Summary/TransactionSummary'

class App extends Component {
  render () {
    return (
      <div className={classes.App}>
       <TransactionBuild/>
       <TransactionSummary/>
      </div>
    );
  }
}

export default App;
