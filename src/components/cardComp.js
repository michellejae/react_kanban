
import React from 'react';

const CardComponent = ({name, details, priority, created_by, assigned_to, handleEditButton, handleDeleteCard, handleChangeLeft, handleChangeRight, id}) => {

  return (
    <div  className="SingleCard">
      <span  className="cardTitle">Task: {name}</span>
      <br />
      <span className="cardPriority">Priority: {priority}</span>
      <br />
      <span className="cardCreatedBy">Owner: {created_by}</span>
      <br />
      <span className="cardDetils">Additional Details: {details}</ span>
      <span className="cardAssignedTo">Assigned to: {assigned_to}</span>
      <br />
      <button className="editButton" id={id} onClick={handleEditButton}> Edit </button>
      <button className="deleteButton" id={id} onClick={handleDeleteCard}> Delete </button>
      {handleChangeLeft ?  <button id={id}  className="buttonLeft" onClick={handleChangeLeft}>  {`<`} </button> : null}
      
      {handleChangeRight ? <button  id={id} className="buttonRight" onClick={handleChangeRight}> {`>`} </button> : null}

    </div>
  )
}


export default CardComponent
