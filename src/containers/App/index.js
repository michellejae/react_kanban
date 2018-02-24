import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './App.css';
import AppTitle from '../../components/titleComp';
import ColumnList from '../Column'

class App extends Component {
  constructor(props) {
    super ()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <AppTitle />
          <ColumnList />
      </div>
    );
  }
}

export default App;
