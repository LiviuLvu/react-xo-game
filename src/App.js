import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameGrid from './GameGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onStart: 'hidden',
      xIsNext: true,
      history: [
        {squares: [
          {id:0, val:''},
          {id:1, val:''},
          {id:2, val:''},
          {id:3, val:''},
          {id:4, val:''},
          {id:5, val:''},
          {id:6, val:''},
          {id:7, val:''},
          {id:8, val:''}
        ]}
      ]
    }
    this.handleStart = this.handleStart.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
  }
  handleStart() {
    this.setState({
      onStart: ''
    });
  }
  handleClickSquare(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
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
        console.error('1');
        return 'Winner is: ' + squares[a].val;
      }
      if (!squares.some((item)=>item.val === '')) {
        console.error('2');
        return 'Game ended in draw';
      }
    }
    return null;
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const gameState = this.calculateWinner(current.squares);
    let status;

    if(gameState) {
      status = gameState;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="app">
        <header className="app-header">
          <div>
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <button
            type="button" 
            className={this.state.onStart ? 'btn btn-info' : 'hidden'}
            onClick={this.handleStart}>
            Start Game
          </button>
        </header>
        
        <div className="game-container">

          <div className={this.state.onStart}>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand">
                    {status}
                  </a>
                </div> 
              </div>
            </nav>

            <GameGrid 
              gameSquares={current.squares}
              onClick={(i) => this.handleClickSquare(i)}
              show={this.state.onStart}
              className={this.state.onStart} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
