import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
