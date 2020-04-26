import React from 'react';

const DeleteLastItem = props => {
  
  const deleteLastItem = event => {
    props.onDeleteItem();
  };
  
  return (
  	<button onClick={deleteLastItem}>
    	Delete Last Item
    </button>
  )
}

export default DeleteLastItem;