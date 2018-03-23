import React from 'react';
import GridItem from './GridItem';

function GameGrid(props) {
  return(
    <div>
      {props.gameSquares.map((squares, index) => {
        console.log('squares', squares);
        return (
          <GridItem 
            key={squares.id} 
            val={squares.val} 
            onClick={() => props.onClick(index)} />
        );
      })}
    </div>
  );
}
  
export default GameGrid;