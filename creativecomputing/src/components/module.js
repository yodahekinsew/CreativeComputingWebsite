import React, { Component } from 'react';
import './App.css';

class Module extends Component(props) {
  constructor() {
    super(props);
  }

  render() {
    return (
      <div style={{minHeight:'200px', height:'10vh', minWidth:'300px', width:'20vh', backgroundColor:'white'}}>
        <div style={{minWidth:'300px', width:'20vh', minHeight:'150px', height:'7.5vh', backgroundColor:'blue'}}>
        </div>
        <div style={{minWidth:'300px', width:'20vh', minHeight:'50px', height:'2.5vh', backgroundColor:'white'}}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Module
