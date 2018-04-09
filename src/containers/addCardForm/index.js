import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCardAction } from '../../actions/cardsAction'

class AddCardForm extends Component {
  constructor (props) {
    super (props)
  
    this.state = {
      name: '',
      priority: '',
      status: 'IN QUEUE',
      created_by: '',
      assigned_to: ''
     }
     
     this.handleChangeName = this.handleChangeName.bind(this);
     this.handleChangePriority = this.handleChangePriority.bind(this);
     this.handleChangeCreatedBy = this.handleChangeCreatedBy.bind(this);
     this.handleChangeAssignedTo = this.handleChangeAssignedTo.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleChangeName(event){
      this.setState({name: event.target.value})
    }

    handleChangePriority(event){
      this.setState({priority: event.target.value})
    }

    handleChangeCreatedBy(event){
      this.setState({created_by: event.target.value})
    }

    handleChangeAssignedTo(event){
      this.setState({assigned_to: event.target.value})
    }

    handleSubmit(event){
      event.preventDefault();
      const newCard = {name: this.state.name, 
                       priority: this.state.priority, 
                       status: this.state.status, 
                       created_by: this.state.created_by, 
                       assigned_to: this.state.assigned_to}
      this.props.newCard(newCard)
      this.setState({ name: '', priority: '', created_by:'', assigned_to:'' });
    }

    render(){

      return (
     
          <form className="mainForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            placeholder="name"
          />
          <input
            type="text"
            value={this.state.priority}
            onChange={this.handleChangePriority}
            placeholder="priority"
          />
          <input
            type="text"
            value={this.state.created_by}
            onChange={this.handleChangeCreatedBy}
            placeholder="created by"
          />
          <input
            type="text"
            value={this.state.assigned_to}
            onChange={this.handleChangeAssignedTo}
            placeholder="assigned to"
          />
            <input type="submit" value="submit" />
          </form>

      )
    }
}

const mapStateToProp = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    newCard: (card) => {
      dispatch(addCardAction(card));
    
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(AddCardForm)
