import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './App.css';
import AppTitle from '../../components/titleComp';
import ColumnList from '../Column'
import { connect } from 'react-redux';
import { loadCardAction } from '../../actions/cardsAction'

class App extends Component {
  constructor(props) {
    super ()
  }

  componentDidMount(){
    this.props.loadCard();
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



const mapStateToProp = state => {
  return {
    cards: state.cards
  }
}

 const mapDispatchToProps = (dispatch) => {
  return {
    loadCard: () => {
      dispatch(loadCardAction());
    }
  }
 }

 export default connect(mapStateToProp, mapDispatchToProps)(App)
