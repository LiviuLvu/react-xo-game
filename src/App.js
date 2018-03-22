import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameGrid from './GameGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleGameStart = this.handleGameStart.bind(this);    
    this.state = {
      game: 'hidden'
    }
  }
  handleGameStart() {
    this.setState({
      game: ''
    });
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div>
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <button
            type="button" 
            className={this.state.game ? 'btn btn-info' : 'hidden'}
            onClick={this.handleGameStart}>
            Start Game
          </button>
        </header>
        
        <div className="game-container">
          <GameGrid game={this.state.game}/>
        </div>
      </div>
    );
  }
}

export default App;
