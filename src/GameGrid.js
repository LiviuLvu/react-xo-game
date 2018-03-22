import React, { Component } from 'react';
import GridItem from './GridItem';

class GameGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSquares: [
        {id:0, val:null},
        {id:1, val:null},
        {id:2, val:null},
        {id:3, val:null},
        {id:4, val:null},
        {id:5, val:null},
        {id:6, val:null},
        {id:7, val:null},
        {id:8, val:null}
      ],
      winState: false
    };
  }
  updateSquare(i) {
    const squares = this.state.gameSquares.slice();
    squares[i].val = 'x';
    this.setState({ gameSquares: squares });
  }
  render() {
    return(
      <div className={this.props.game}>
          {this.state.gameSquares.map((item, index)=>{
            return(
              <GridItem 
                id={item.id} 
                val={this.state.gameSquares[index].val} 
                onClick={()=>this.updateSquare(index)} />
            );
          })}
      </div>
    )
  }
}

export default GameGrid;