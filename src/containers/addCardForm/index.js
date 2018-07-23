import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCardAction, handleAddForm } from '../../actions/cardsAction'


class AddCardForm extends Component {
  constructor (props) {
    super (props)
  
    this.state = {
      name: '',
      details: '',
      priority: '',
      status: 'IN QUEUE',
      created_by: '',
      assigned_to: ''
     }
     
     this.handleChangeName = this.handleChangeName.bind(this);
     this.handleChangeDetails = this.handleChangeDetails.bind(this);
     this.handleChangePriority = this.handleChangePriority.bind(this);
     this.handleChangeCreatedBy = this.handleChangeCreatedBy.bind(this);
     this.handleChangeAssignedTo = this.handleChangeAssignedTo.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleCloseButton = this.handleCloseButton.bind(this)

    }


    handleChangeName(event){
      this.setState({name: event.target.value})
    }

    handleChangeDetails(event){
      this.setState({details: event.target.value})
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
                       details: this.state.details, 
                       priority: this.state.priority,                      
                       status: this.state.status, 
                       created_by: this.state.created_by, 
                       assigned_to: this.state.assigned_to}
      this.props.newCard(newCard)
      this.setState({ name: '', details: '', priority: '', created_by:'', assigned_to:'' });
      this.props.addCard(false)
    }
    
    handleCloseButton(){
      this.props.addCard(false)
    }

    render(){

      return (
        <div className="formContainer">
        <button className="closeForm" onClick={this.handleCloseButton}>X</button>
          <form className="mainForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            placeholder="name*"
            required
          />
          <input
            type="text"
            value={this.state.priority}
            onChange={this.handleChangePriority}
            placeholder="priority*"
            required
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
            onChange={this.handleChangeCreatedBy}
            placeholder="created by*"
            required
          />
          <input
            type="text"
            value={this.state.assigned_to}
            onChange={this.handleChangeAssignedTo}
            placeholder="assigned to"
          />
            <input type="submit" value="submit" />
            <div>* Required Fields</div>
          </form>
      </div>
      )
    }
}

const mapStateToProp = state => {
  return {
    showAddForm: state.cards.showAddForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newCard: (card) => {
      dispatch(addCardAction(card));
    },
    addCard: (state) => {
      dispatch(handleAddForm(state));
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(AddCardForm)
