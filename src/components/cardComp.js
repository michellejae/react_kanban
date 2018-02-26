
import React from 'react';

const CardComponent = ({cardInfo}) => {

  return (
    cardInfo.map((card, idx) => {
      return (
        <div className="SingleCard">
          <span className="cardTitle">{card.name}</span>
          <br />
          <span className="cardPriority">Priority: {card.priority}</span>
          <br />
          <span className="cardCreatedBy">{card.created_by}</span>
          <br />
          <span className="cardAssignedTo">{card.assigned_to}</span>
        </div>
      )
   })
  
  )
}


export default CardComponent
