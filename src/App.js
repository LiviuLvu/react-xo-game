import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button 
          type="button" 
          className={this.state.game ? 'btn btn-primary' : 'hidden'}
          onClick={this.handleGameStart}>Start Game</button>
        <Game game={this.state.game}/>
      </div>
    );
  }
}

export default App;
