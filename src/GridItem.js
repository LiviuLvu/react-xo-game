import React from 'react';
import './styles/GridItem.css';

function GridItem(props) {
  return(
    <input 
      type="text"
      id={props.id}
      value={props.val}
      onClick={props.onClick}
      className={props.win}
    />
  )
}

export default GridItem;