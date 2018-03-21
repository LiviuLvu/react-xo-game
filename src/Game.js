import React, { Component } from 'react';
import GridItem from './GridItem';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [],
      winState: false,
      showGame: this.props.game
    };
  }
  render() {
    return(
      <div className={this.props.game} >
        <div>
          <GridItem id="0" />
          <GridItem id="1" />
          <GridItem id="2" />
        </div>
        <div>
          <GridItem id="3" />
          <GridItem id="4" />
          <GridItem id="5" />
        </div>
        <div>
          <GridItem id="6" />
          <GridItem id="7" />
          <GridItem id="8" />
        </div>
      </div>
    )
  }
}

export default Game;