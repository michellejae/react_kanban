
import React from 'react';

const CardComponent = ({name, details, priority, created_by, assigned_to, handleEditButton, handleDeleteCard, handleChangeLeft, handleChangeRight, id}) => {

  return (
    <div  className="SingleCard">
      <div className="cardTitle">Task:<span> {name}</span></div>
      
      <div className="cardPriority">Priority: <span>{priority}</span></div>
      <br />
      <div className="cardDetails">Additional Details: <span>{details}</ span></div>
      <br />
      <div className="createdAssigned">
      <div className="cardCreatedBy">Owner: <span className="smallCardText">{created_by}</ span></div>
      <div className="cardAssignedTo">Assigned: <span className="smallCardText">{assigned_to}</ span></div>
      </div>
      <button className="editButton" id={id} onClick={handleEditButton}> Edit </button>
      <button className="deleteButton" id={id} onClick={handleDeleteCard}> Delete </button>
      {handleChangeLeft ?  <button id={id}  className="buttonLeft" onClick={handleChangeLeft}>  {`<`} </button> : null}
      
      {handleChangeRight ? <button  id={id} className="buttonRight" onClick={handleChangeRight}> {`>`} </button> : null}

    </div>
  )
}


export default CardComponent
