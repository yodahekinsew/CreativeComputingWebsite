import React, { Component } from 'react';
import '../App.css';
import Mission from "./mission.js"
import Module from "./module.js"
import Projects from "./projects.js"
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';

class ModuleLayout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', height:'100%', minHeight:'800px', width:'100%', minWidth:'1000px'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
          <Module title="test"/>
          <Module title="test 2"/>
          <Module title="test 3"/>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
          <Module title="test"/>
          <Module title="test 2"/>
          <Module title="test 3"/>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
          <Module title="test"/>
          <Module title="test 2"/>
          <Module title="test 3"/>
        </div>
        <div style={{position:'absolute'}}>
        {
          this.props.display
          ?
          this.props.module
          :
          null
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.newState.display,
    module: state.newState.module,
  }
}

const mapActionsToProps = {changeDisplay}

export default connect(mapStateToProps, mapActionsToProps)(ModuleLayout)
