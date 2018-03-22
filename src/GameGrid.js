import React, { Component } from 'react';
import GridItem from './GridItem';

class GameGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSquares: [
        {id:0, val:''},
        {id:1, val:''},
        {id:2, val:''},
        {id:3, val:''},
        {id:4, val:''},
        {id:5, val:''},
        {id:6, val:''},
        {id:7, val:''},
        {id:8, val:''}
      ],
      xIsNext: true,
      winState: false
    };
  }
  updateSquare(i) {
    const squares = this.state.gameSquares.slice();
    squares[i].val = this.state.xIsNext ? 'x' : 'o';
    this.setState({
      gameSquares: squares,
      xIsNext: !this.state.xIsNext
    });
  }
  render() {
    return(
      <div className={this.props.game}>
        <br/>
        <div>
            {this.state.gameSquares.map((item, index)=>{
              return(
                <GridItem 
                  key={item.id} 
                  val={this.state.gameSquares[index].val} 
                  onClick={()=>this.updateSquare(index)} />
              );
            })}
        </div>
        <div className="label label-info">{'Next player: ' + (this.state.xIsNext ? 'X' : 'O')}</div>
      </div>
    )
  }
}

export default GameGrid;