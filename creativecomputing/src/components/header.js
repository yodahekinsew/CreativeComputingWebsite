import React, { Component } from 'react';
import '../App.css';
import Introduction from "./introduction.js"
import Modules from './moduleLayout.js'
import Projects from "./projects.js"
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';
import scratchLogoImage from '../img/scratch_logo.png';
import mediaLabLogoImage from '../img/MIT_ML_Logo.png';
import lifelongKindergartenImage from '../img/llk.png';
import harvardImage from '../img/harvard_logo.png';

const scratch_logo = <img src={scratchLogoImage} alt={"scratch logo"} style={{height:'50px', width:'150px'}}/>
const mediaLab_logo = <img src={mediaLabLogoImage} alt={"media lab logo"} style={{height:'50px', width:'90px'}}/>
const lifelongKindergarten_logo = <img src={lifelongKindergartenImage} alt={"media lab logo"} style={{height:'50px', width:'70px'}}/>
const harvard_logo = <img src={harvardImage} alt={"media lab logo"} style={{height:'50px', width:'40px'}}/>
class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{height:'70%', minHeight:'600px', width:'100%',backgroundColor:'#0a82fa'}}>
        <div style={{height:'100%', width:'100%', color:'whitesmoke', fontWeight:'bolder', paddingLeft:'10px', fontSize:'80px', whiteSpace:'pre', outline:'2px solid rgba(0,0,0,.2)'}}>
            {scratch_logo}
            {mediaLab_logo}
            {lifelongKindergarten_logo}
            {harvard_logo}
            <span>{"\n Our Mission for Creative Computing is to\n"}</span>
            <span style={{fontWeight:'bold',fontSize:'50px'}}>{"\t\tempower students\n"}</span>
            <span style={{fontWeight:'bold',fontSize:'50px'}}>{"\t\tand raise awareness about social issues\n"}</span>
            <span style={{fontWeight:'bold',fontSize:'70px'}}>{"\t\t\tthrough fun and thought\n"}</span>
            <span style={{fontWeight:'bold',fontSize:'70px'}}>{"\t\t\t\t\t\tprovoking Scratch projects\n"}</span>
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

export default connect(mapStateToProps, mapActionsToProps)(Header)
