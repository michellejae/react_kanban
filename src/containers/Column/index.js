import React from 'react';
import Column from '../../components/columnListComp'
//import React, { Component } from 'react';

const ColumnListContainer = (props) =>{
  return (
    <div className="ColumnContainer">  
             <Column name="IN QUEUE"  />
             <Column name="IN PROGRESS" />
             <Column name="DONE" />
     </div>   
  )
}

export default ColumnListContainer
