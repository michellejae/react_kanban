import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCardAction, editCardAction, deleteCardAction, handlePopUps, handleAddForm } from '../actions/cardsAction'
import CardComponent from './cardComp';

class Column extends Component {
  constructor (props) {
    super ()
    this.handleChangeLeft = this.handleChangeLeft.bind(this)
    this.handleChangeRight = this.handleChangeRight.bind(this)
    this.findCardById = this.findCardById.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
    this.handleDeleteCard = this.handleDeleteCard.bind(this)
    this.handleEditButton = this.handleEditButton.bind(this)
  }

  handleEditButton(event){
    const cardID = event.target.id
    this.props.showEditCard(cardID)
  }

  handleDeleteCard(event){
    const cardID = event.target.id
    if (cardID) {
      let foundCard =  this.findCardById(cardID)
       if (foundCard) {
         this.props.deleteCard(foundCard)
       }
    }
  }

  handleChangeRight(event){
    const cardID = event.target.id
    if (cardID) {
    let foundCard =  this.findCardById(cardID)
     if (foundCard) {
       this.moveRight(foundCard)
     }
  }
}

  handleChangeLeft(event){
    const cardID = event.target.id
    if (cardID) {
    let foundCard =  this.findCardById(cardID)
     if (foundCard) {
       this.moveLeft(foundCard)
     }
    }
  }

  moveRight(card) {
    if(card.status === 'IN QUEUE'){
       card.status = 'IN PROGRESS'
      } else if (card.status === 'IN PROGRESS'){
      card.status = 'DONE'
    }

    this.props.editCard(card)
    }
  

  moveLeft(card){
    if(card.status === 'DONE'){
      card.status = 'IN PROGRESS'
    } else if(card.status === 'IN PROGRESS'){
      card.status = 'IN QUEUE'
    }
    this.props.editCard(card)
  }


  findCardById(id) {
    id = +id
    const foundCard = this.props.cards.find(card =>{
      return card.id === id
    });
    if (foundCard){
      return foundCard
    }
  }

  render () {
    return (
   
        <div className="singleColumn">
          <div className="columnTitle"> {this.props.name} </div>
          <br />
          <div className="CardContainer">
    
            {
              this.props.cards.filter((card) => {
                return card.status === this.props.name
              }).map((card) => {
                if(card.status === 'IN QUEUE'){
                  return <CardComponent  key={card.id} {...card} handleEditButton={this.handleEditButton} handleDeleteCard={this.handleDeleteCard} handleChangeRight={this.handleChangeRight}/>
                }
                if (card.status === 'IN PROGRESS'){
                  return <CardComponent key={card.id} {...card} handleEditButton={this.handleEditButton} handleDeleteCard={this.handleDeleteCard} handleChangeLeft={this.handleChangeLeft} handleChangeRight={this.handleChangeRight} />
                }
                if (card.status === 'DONE'){
                  return <CardComponent key={card.id} {...card} handleEditButton={this.handleEditButton} handleDeleteCard={this.handleDeleteCard} handleChangeLeft={this.handleChangeLeft}/>
                }
                return true
              })
            }
          </div>
        </div>

    )
  } 
}

const mapStateToProp = state => {
  return {
    cards: state.cards.cards
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCard: () => {
      dispatch(loadCardAction());
    },
    editCard: (card) =>{
      dispatch(editCardAction(card));
    },
    deleteCard: (card) =>{
      dispatch(deleteCardAction(card));
    },
    showEditCard: (id) =>{
      dispatch(handlePopUps(id));
    }, 
    addCard: (state) => {
      dispatch(handleAddForm(state));
    }
  }
 }





export default connect(mapStateToProp, mapDispatchToProps)(Column)