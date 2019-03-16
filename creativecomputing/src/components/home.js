import React, { Component } from 'react';
import '../App.css';
import Mission from "./mission.js"
import Modules from './moduleLayout.js'
import Projects from "./projects.js"

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{height:'100%', width:'100%', backgroundColor:'#27556c'}}>
        <Modules />
      </div>
    );
  }
}

export default Home
