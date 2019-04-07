import React, { Component } from 'react';
import '../App.css';
import Introduction from "./introduction.js"
import Modules from './moduleLayout.js'
import Projects from "./projects.js"
import Header from "./header.js"
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{height:'100%', width:'100%'}}>
        {/* <Introduction/> */}
        <Header/>
        <Modules/>
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

export default connect(mapStateToProps, mapActionsToProps)(Home)
