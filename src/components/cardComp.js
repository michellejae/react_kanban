
import React from 'react';

const CardComponent = ({name, details, priority, created_by, assigned_to, handleEditButton, handleDeleteCard, handleChangeLeft, handleChangeRight, id}) => {

  return (
    <div  className="SingleCard">
      <div className="cardTitle">Task:<span className="test"> {name}</span></div>
      
      <div className="cardPriority">Priority: <span>{priority}</span></div>
      <br />
      <div className="cardDetails">Additional Details: <span>{details}</ span></div>
      <br />
      <div className="cardCreatedBy">Owner: <span>{created_by}</span></div>
    
      <div className="cardAssignedTo">Assigned to: <span>{assigned_to}</span></div>
    
      <button className="editButton" id={id} onClick={handleEditButton}> Edit </button>
      <button className="deleteButton" id={id} onClick={handleDeleteCard}> Delete </button>
      {handleChangeLeft ?  <button id={id}  className="buttonLeft" onClick={handleChangeLeft}>  {`<`} </button> : null}
      
      {handleChangeRight ? <button  id={id} className="buttonRight" onClick={handleChangeRight}> {`>`} </button> : null}

    </div>
  )
}


export default CardComponent
