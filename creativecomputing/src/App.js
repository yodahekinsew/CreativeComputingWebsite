import React, { Component } from 'react';
import './App.css';
import Home from './components/home.js';

class App extends Component {
  render() {
    return (
      <div style={{height:'100vh',width:'100vw', backgroundColor:'#27556c'}}>
        <Home/>
      </div>
    );
  }
}

export default App;
