import React, { Component } from 'react';
import '../App.css';
import Introduction from "./introduction.js"
import Modules from './moduleLayout.js'
import Projects from "./projects.js"
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';

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
        <div style={{height:'100%', width:'100%', backgroundColor:'#27556c', position:'relative'}}>
          <Modules />
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

export default connect(mapStateToProps, mapActionsToProps)(Home)
