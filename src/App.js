import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameGrid from './GameGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);    
    this.state = {
      onStart: 'hidden',
      history: [
        {id:0, val:''},
        {id:1, val:''},
        {id:2, val:''},
        {id:3, val:''},
        {id:4, val:''},
        {id:5, val:''},
        {id:6, val:''},
        {id:7, val:''},
        {id:8, val:''}
      ]
    }
  }
  handleStart() {
    this.setState({
      onStart: ''
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
            className={this.state.onStart ? 'btn btn-info' : 'hidden'}
            onClick={this.handleStart}>
            Start Game
          </button>
        </header>
        
        <div className="game-container">
          <GameGrid 
            board={this.state.history}
            hide={this.state.onStart}/>
        </div>
      </div>
    );
  }
}

export default App;
