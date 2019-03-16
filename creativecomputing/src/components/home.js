import React, { Component } from 'react';
import './App.css';
import Mission from "./mission.js"
import Module from "./module.js"
import Projects from "./projects.js"

class Home extends Components {
  constructor() {
    super(props);
  }

  render() {
    return (
      <Module title="test"/>
    );
  }
}

export default Home
