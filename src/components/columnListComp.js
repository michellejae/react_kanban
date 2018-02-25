import React, { Component } from 'react';
import Card from './cardComp'
//import { connect } from 'react-redux';


class ColumnListItem extends Component {
  constructor(props){
    super(props)

  }
  render () {
  return (
    <div className="singleColumn">
    <span className="coulmnTitle"> {this.props.name} </span>
    <Card />
    <div className="Card"></div>
    </div>
  )
  }
}

export default ColumnListItem