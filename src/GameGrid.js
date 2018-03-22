import React from 'react';
import GridItem from './GridItem';

function GameGrid(props) {
  return(
    <div>
      {props.gameSquares.map((item, index) => {
        return (
          <GridItem 
            key={item.id} 
            val={item.val} 
            onClick={() => props.onClick(index)} />
        );
      })}
    </div>
  );
}

export default GameGrid;