import React, { Component } from 'react';
import GridItem from './GridItem';

class GameGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSquares: this.props.board,
      xIsNext: true
    };
  }
  updateSquare(i) {
    const squares = this.state.gameSquares.slice();
    if(this.calculateWinner(squares) || squares[i].val) {
      return;
    }
    squares[i].val = this.state.xIsNext ? 'x' : 'o';
    this.setState({
      gameSquares: squares,
      xIsNext: !this.state.xIsNext
    });
  }
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a].val && squares[a].val === squares[b].val && squares[a].val === squares[c].val) {
        return 'Winner is: ' + squares[a].val;
      }
      if (!this.state.gameSquares.some((item)=>item.val === '')) {
        return 'Game ended in draw';
      }
    }
    return null;
  }
  render() {
    const gameState = this.calculateWinner(this.state.gameSquares);
    let status = '';
    
    if(gameState) {
      status = gameState;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return <div className={this.props.hide}>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">
                {status}
              </a>
            </div> 
          </div>
        </nav>
        
        <div>
          {this.state.gameSquares.map((item, index) => {
            return (
              <GridItem 
                key={item.id} 
                val={this.state.gameSquares[index].val} 
                onClick={() => this.updateSquare(index)} />
            );
          })}
        </div>
      </div>;
  }
}

export default GameGrid;