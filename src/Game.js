import React, { Component } from 'react';
import GridItem from './GridItem';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        {id: 0, val:''},
        {id: 1, val:''},
        {id: 2, val:''},
        {id: 3, val:''},
        {id: 4, val:''},
        {id: 5, val:''},
        {id: 6, val:''},
        {id: 7, val:''},
        {id: 8, val:''}
      ],
      winState: false
    };
  }
  render() {
    return(
      <div className={this.props.game}>
          {this.state.gameState.map((item)=>{
            return <GridItem id={item.id} val={item.val}/>
          })}
      </div>
    )
  }
}

export default Game;