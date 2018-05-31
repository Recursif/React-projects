import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Test from './Test.js';
import Colored from './components/Color/Colored.js';

let name = "john";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hi { name }!
        </p>
        <Clock name={name}/>
        <Test/>
        <Colored/>
      </div>
    );
  }
}

export default App;
