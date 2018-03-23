import React from 'react';
import GridItem from './GridItem';

function GameGrid(props) {
  return(
    <div>
      {props.gameSquares.map((squares, index) => {
        let winHighlight = squares.winSpot ? 'winHighlight' : '';
        return (
          <GridItem 
            key={squares.id} 
            val={squares.val} 
            win={winHighlight}
            onClick={() => props.onClick(index)} />
        );
      })}
    </div>
  );
}
  
export default GameGrid;