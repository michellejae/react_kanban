import React from 'react';
import ColumnListItem from '../../components/columnListComp'
//import React, { Component } from 'react';

const ColumnList = (props) =>{

  return (
    <div className="columns">  
             <ColumnListItem name="IN QUEUE"  />
             <ColumnListItem name="IN PROGRESS" />
             <ColumnListItem name="DONE" />
     </div>   
  )
}

export default ColumnList
