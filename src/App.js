import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class NextResults extends Component {
  render () {
    return (
      <button className = 'next-button'> Next Quote > </button>
    )
  }
}
class Results extends Component{
  render () {
    return (
      <h1>quote will go here</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2><Results /></h2>
        </div>
          <NextResults />
      </div>
    );
  }
}

export default App;
