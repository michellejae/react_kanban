import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCardAction } from '../actions/cardsAction'
import CardComponent from './cardComp'

class Column extends Component {
  constructor (props) {
    super ()
  }

  componentDidMount(){
    this.props.loadCard();
  }

  render () {

  return (
    <div className="singleColumn">
      <span className="coulmnTitle"> {this.props.name} </span>
      <br />
      <div className="CardContainer">
      <CardComponent  cardInfo={this.props.cards} />
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
    }
  }
 }





export default connect(mapStateToProp, mapDispatchToProps)(Column)