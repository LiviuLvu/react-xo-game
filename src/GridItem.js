import React from 'react';
import './GridItem.css';

function GridItem(props) {
  return(
    <input 
      type="text"
      id={props.id}
      value={props.val}
      onClick={()=>props.onClick()}
    />
  )
}

export default GridItem;