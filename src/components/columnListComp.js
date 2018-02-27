import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCardAction, editCardAction } from '../actions/cardsAction'
import CardComponent from './cardComp'

class Column extends Component {
  constructor (props) {
    super ()

    this.handleChangeLeft = this.handleChangeLeft.bind(this)
    this.handleChangeRight = this.handleChangeRight.bind(this)
    this.findCardById = this.findCardById.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
  }

  handleChangeRight(event){
    console.log(event.target.id)
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

  moveLeft(card){
    if(card.status === 'DONE'){
      card.status = 'IN PROGRESS'
    } else if(card.status === 'IN PROGRESS'){
      card.status = 'IN QUEUE'
    }
    console.log(card)
    this.props.editCard(card)
  }

  moveRight(card) {
    if(card.status === 'IN QUEUE'){
       card.status = 'IN PROGRESS'
      } else if (card.status === 'IN PROGRESS'){
      card.status = 'DONE'
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
   
    let cardsContent = this.props.cards.filter((card) => {
      return card.status === this.props.name
    }).map((card) => {
      if(card.status === 'IN QUEUE'){
        return <CardComponent  key={card.id} {...card} handleChangeRight={this.handleChangeRight}/>
      }
      if (card.status === 'IN PROGRESS'){
        return <CardComponent key={card.id} {...card} handleChangeLeft={this.handleChangeLeft} handleChangeRight={this.handleChangeRight} />
      }
      if (card.status === 'DONE'){
        return <CardComponent key={card.id} {...card} handleChangeLeft={this.handleChangeLeft}/>
      }
      return true
    })

  return (
    <div className="singleColumn">
      <span className="coulmnTitle"> {this.props.name} </span>
      <br />
      <div className="CardContainer">
     {cardsContent}
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
      dispatch(editCardAction(card))
    }
  }
 }





export default connect(mapStateToProp, mapDispatchToProps)(Column)