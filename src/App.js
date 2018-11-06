import React, { Component } from 'react';
import Counter from './components/Counter';
import Practice from './components/Practice';
import Hilsen from './components/Hilsen';
import Farge from './components/Farge';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>
        React practice
        </h2>
        <Counter />
        <br />
        <Practice />
        <br />
        <Hilsen />
        <br />
        <Farge />
      </div>
    );
  }
}

export default App;
