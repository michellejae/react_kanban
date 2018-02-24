import React from 'react';

const ColumnListItem = ({column}) => {
  return (
    <div className="singleColumn">
    <div > {column.name} </div>
    </div>
  )
}

export default ColumnListItem