import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './App.css';
import AppTitle from '../../components/titleComp';
import ColumnListContainer from '../Column'
import  AddCardForm  from '../addCardForm' 
import { connect } from 'react-redux';
import { loadCardAction } from '../../actions/cardsAction'


class App extends Component {
  constructor(props) {
    super ()
    
    this.state = {
      showForm: false
    }

    this.handleNewCardForm = this.handleNewCardForm.bind(this)


  }

  componentDidMount(){
    this.props.loadCard();
    
  }

  handleNewCardForm (){
    this.setState({showForm: true})
    }
  

  render() {
    return (
      <div className="parentClass">
      <div className="newCardForm">
      {this.state.showForm ? <AddCardForm /> : null}
     
      </div>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <AppTitle />
          <button className="formButton" onClick={this.handleNewCardForm}> New Card </button>
          <ColumnListContainer />
      </div>
      </div>
    )
  }


}




const mapStateToProp = state => {
  return {
    caRDs: state.cards.cards
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
