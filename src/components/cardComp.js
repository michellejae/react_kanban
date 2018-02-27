
import React from 'react';

const CardComponent = ({name, priority, created_by, assigned_to, handleChangeLeft, handleChangeRight, id}) => {

  return (
    <div  className="SingleCard">
      <span  className="cardTitle">{name}</span>
      <br />
      <span className="cardPriority">Priority: {priority}</span>
      <br />
      <span className="cardCreatedBy">{created_by}</span>
      <br />
      <span className="cardAssignedTo">{assigned_to}</span>
      {handleChangeLeft ?  <button id={id}  className="buttonLeft" onClick={handleChangeLeft}>  {`<`} </button> : null}
      
      {handleChangeRight ? <button  id={id} className="buttonRight" onClick={handleChangeRight}> {`>`} </button> : null}

    </div>
  )
}


export default CardComponent
