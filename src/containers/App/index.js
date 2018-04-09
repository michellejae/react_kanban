import React, { Component } from 'react';
// import logo from '../../../src/logo.svg';
import './App.css';
import AppTitle from '../../components/titleComp';
import ColumnListContainer from '../Column'
import  AddCardForm  from '../addCardForm' 
import  EditCardForm from '../editCardForm'
import { connect } from 'react-redux';
import { loadCardAction, handleAddForm } from '../../actions/cardsAction'


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
    console.log(this.props.showAddForm)
    return (
      <div className="parentClass">
        <div className="EditCard">
            {this.props.showEdit ? <EditCardForm id={this.props.showEdit}/> : null}
        </div>
        <div className="newCardForm">
        {this.props.showAddForm ? <AddCardForm /> : null}
            {/* {this.state.showForm ? <AddCardForm /> : null} */}
        </div>
        <div className="App">
          <AppTitle />
          <button className="formButton" onClick={this.props.addCard(false)}> New Card </button>
          {/* <button className="formButton" onClick={this.handleNewCardForm}> New Card </button> */}
          <ColumnListContainer />
        </div>
      </div>
    )
  }
}


const mapStateToProp = state => {
  return {
    cards: state.cards.cards,
    showEdit: state.cards.showEdit,
    showAddForm: state.cards.showAddForm
  }
}

 const mapDispatchToProps = (dispatch) => {
  return {
    loadCard: () => {
      dispatch(loadCardAction());
    },
    addCard: (state) => {
      dispatch(handleAddForm(state))
    }
  }
 }

 export default connect(mapStateToProp, mapDispatchToProps)(App)
