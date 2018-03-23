import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import GameGrid from './GameGrid';
import GameHistory from './GameHistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onStart: 'hidden',
      xIsNext: true,
      stepNumber: 0,
      history: [
        {squares: [
          {id:0, winSpot:'', val:''},
          {id:1, winSpot:'', val:''},
          {id:2, winSpot:'', val:''},
          {id:3, winSpot:'', val:''},
          {id:4, winSpot:'', val:''},
          {id:5, winSpot:'', val:''},
          {id:6, winSpot:'', val:''},
          {id:7, winSpot:'', val:''},
          {id:8, winSpot:'', val:''}
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
    const historyDeepCopy = JSON.stringify(this.state.history.slice(0, this.state.stepNumber + 1));
    const historyCopy = JSON.parse(historyDeepCopy);
    const current = historyCopy[historyCopy.length - 1];
    const squares = current.squares.slice();
    if(this.calculateWinner(squares) || squares[i].val) {
      return;
    }
    squares[i].val = this.state.xIsNext ? 'x' : 'o';

    this.setState({
      history: historyCopy.concat([
        {squares: squares}
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: historyCopy.length
    });
    this.clearHistoryStyle();
  }
  clearHistoryStyle() {
    var elements = document.getElementsByClassName('list-group-item');
    Array.prototype.forEach.call(elements, element => element.style.color = '#333');
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
        this.highlight(a,b,c);
        return 'Winner is: ' + squares[a].val;
      }
      if (!squares.some((item)=>item.val === '')) {
        return 'Game ended in draw';
      }
    }
    return null;
  }
  highlight(a, b, c) {
    const historyCopy = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = historyCopy[historyCopy.length - 1];
    const squares = current.squares.slice();
    squares[a].winSpot = 1;
    squares[b].winSpot = 1;
    squares[c].winSpot = 1;
  }
  handleJumpTo(step) {
    this.clearHistoryStyle();
    document.getElementById('history' + step).style.color = '#60dafc';

    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }
  render() {
    let history = this.state.history;
    let current = history[this.state.stepNumber];
    let gameState = this.calculateWinner(current.squares);
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
              onClick={i => this.handleClickSquare(i)}
              className={this.state.onStart} />
            <GameHistory
              onJumpTo={step => this.handleJumpTo(step)}
              historyList={history} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
