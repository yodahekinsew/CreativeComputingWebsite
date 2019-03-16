import React, { Component } from 'react';
import '../App.css';
import AboutUs from "./aboutus.js"
import Mission from "./mission.js"

class Introduction extends Component {
  constructor() {
    super();
    this.state = {
      showMission: true,
    }
  }


  handleButtonClick = (e) => {
    this.setState({showMission:!this.state.showMission});
  }

  displayCorrectItem = () => {
    if (this.state.showMission) {
      return (
        <div align="center">
          <Mission />
          <button id="introAboutUsButton" onClick={this.handleButtonClick}>Learn more about us!</button>
        </div>
      )
    } else {
      return (
        <div align="center">
          <AboutUs />
          <button id="introMissionButton" onClick={this.handleButtonClick}>Learn more about our mission!</button>
        </div>
      )
    }
  }

  render() {
    return this.displayCorrectItem()
  }
}

export default Introduction
