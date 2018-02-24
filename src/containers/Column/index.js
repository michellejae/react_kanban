import React from 'react';
import ColumnListItem from '../../components/columnList'
//import React, { Component } from 'react';

const ColumnList = (props) =>{
  const columns = [{
    id: 1,
    name:'IN QUEUE'},
    {id: 2,
    name: 'IN PROGRESS'},
    {id: 3,
    name: 'DONE'}]
    

  return (
    <div className="columns">

        {columns.map((column) => {
           return (
             <ColumnListItem key={column.id} column={column} />  
           )
        })
      }

     </div>   
  )
}

export default ColumnList
