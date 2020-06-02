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

// <AuthContext.Provider 
// value={{
//   authenticated: this.state.authenticated, 
//   login:this.loginHandler}}>
//       {this.state.cockpitVisible ? 
//       (<CockPit stateLength={this.state.persons.length} 
//             stateVisible={this.state.personsVisible} 
//             butClick={this.toogleRenderHandler} 
//             title={this.props.appTitle}
//         />) : 
//         null}
// {persons}  
// </AuthContext.Provider>