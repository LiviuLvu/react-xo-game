import React from 'react';
import './styles/GameHistory.css';

function GameHistory(props) {
  return(
    <ul className="list-group">
      {props.historyList.map((step, move) => {
        const desc = !move ? 'Jump to start' : 'Jump to step ' + move;
        const highlightStep = (props.styleStep === move) ? ' highlight-step' : '';
        return(
          <li
            key={move}
            id={'history' + move}
            onClick={()=>props.onJumpTo(move)}
            className={'list-group-item' + highlightStep}>
            {desc}
          </li>
        )
      })}
    </ul>
  );
}

export default GameHistory;