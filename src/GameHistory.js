import React from 'react';

function GameHistory(props) {
  return(
    <ul className="list-group">
      {props.historyList.map((step, move) => {       
        const desc = !move ? 'Jump to start' : 'Jump to step ' + move;
        return(
          <li
            key={move}
            id={'history' + move}
            onClick={()=>props.onJumpTo(move)}
            className="list-group-item">
            {desc}
          </li>
        )     
      })}
    </ul>
  );
}

export default GameHistory;