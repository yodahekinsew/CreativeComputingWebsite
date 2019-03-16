import React, { Component } from 'react';
import '../App.css';
import Introduction from "./introduction.js"
import Modules from './moduleLayout.js'
import Projects from "./projects.js"

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <Introduction />
        </div>
        <div style={{height:'100%', width:'100%', backgroundColor:'#27556c'}}>
          <Modules />
        </div>
      </div>
    );
  }
}

export default Home
