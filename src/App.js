import React, {Component}from 'react';
import './App.css';
import classes from './App.module.css';
import TransactionBuild from './Container/TransactionBuild';



class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <TransactionBuild/>
      </div>
    );
  }
}

export default App;

