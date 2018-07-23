import React, {Component} from 'react';
import { connect } from 'react-redux';
import {  editCardAction, loadSingleCardAction, handlePopUps } from '../../actions/cardsAction'

class EditCardForm extends Component {
  constructor (props) {
  super ()

  this.state = {
    name: '',
    details: '',
    priority: '',
    status: '',
    created_by: '',
    assigned_to: ''
  }
  
     this.handleEditName = this.handleEditName.bind(this);
     this.handleEditDetails = this.handleEditDetails.bind(this);
     this.handleEditPriority = this.handleEditPriority.bind(this);
     this.handleEditCreatedBy = this.handleEditCreatedBy.bind(this);
     this.handleEditAssignedTo = this.handleEditAssignedTo.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleEditCloseButton = this.handleEditCloseButton.bind(this)
}

componentDidMount(){
  this.props.loadSingleCard(this.props.id);
  this.setState({name: this.props.singleCard.name,
                 priority: this.props.singleCard.priority,
                 status: this.props.singleCard.status,
                 created_by: this.props.singleCard.created_by,
                 assigned_to: this.props.singleCard.assigned_to});
}


handleEditName(event){
  this.setState({name: event.target.value})
}

handleEditPriority(event){
  this.setState({priority: event.target.value})
}

handleEditDetails(event){
  this.setState({priority: event.target.value})
}

handleEditCreatedBy(event){
  this.setState({created_by: event.target.value})
}

handleEditAssignedTo(event){
  this.setState({assigned_to: event.target.value})
}

handleSubmit(event){
  event.preventDefault();
  const editedCard = {
    id: this.props.id,
    name: this.state.name,
    details: this.state.details,
    priority: this.state.priority,
    status: this.state.status, 
    created_by: this.state.created_by,
    assigned_to: this.state.assigned_to}
    this.props.editCard(editedCard)
    this.props.closeEdit('')
  }

  handleEditCloseButton(){
    this.props.closeEdit('')
  }

  render (){
    console.log('first', this.state)
    console.log('before', this.props.singleCard)
    return (
      <div className="editFormContainer">
      <button className="closeForm" onClick={this.handleEditCloseButton}>X</button>
      <form className="editForm" onSubmit={this.handleSubmit}>
      <input
        type="text"
        value={this.state.name}
        onChange={this.handleEditName}
        placeholder={this.props.singleCard.name}
      />
      <input
        type="text"
        value={this.state.priority}
        onChange={this.handleEditPriority}
        placeholder={this.props.singleCard.priority}
      />
      <input
            type="text"
            value={this.state.details}
            onChange={this.handleChangeDetails}
            placeholder="additional details"
      />
      <input
        type="text"
        value={this.state.created_by}
        onChange={this.handleEditCreatedBy}
        placeholder={this.props.singleCard.created_by}
      />
      <input
        type="text"
        value={this.state.assigned_to}
        onChange={this.handleEditAssignedTo}
        placeholder={this.props.singleCard.assigned_to}
      />
        <input type="submit" value="submit" />
      </form>
      </div>
    )
  }
}

const mapStateToProp = state => {
  return {
    cards: state.cards.cards,
    singleCard: state.cards.singleCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleCard: (id) =>{
      dispatch(loadSingleCardAction(id))
    },
    editCard: (card) => {
      dispatch(editCardAction(card));
    },
    closeEdit: (id) => {
      dispatch(handlePopUps(id))
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(EditCardForm)
