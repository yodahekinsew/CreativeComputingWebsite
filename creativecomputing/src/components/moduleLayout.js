import React, { Component } from 'react';
import '../App.css';
import Module from "./module.js"
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';

class ModuleLayout extends Component {
  render() {
    return (
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', height:'90%', minHeight:'800px', width:'100%', minWidth:'1000px', backgroundColor:'whitesmoke'}}>
        <div style={{fontSize:'80px', color:'#0a82fa', fontWeight:'bold', paddingLeft:'20px', whiteSpace:'pre'}}>
          <span>{"The Curriculum"}</span>
          {/* <span style={{fontSize:'30px', color:'#0a82fa', paddingLeft:'50px', fontWeight:'normal'}}>{"Activities that you can use for your classroom"}</span> */}
        </div>
        <div style={{display:'flex', zIndex:2, flexDirection:'row', justifyContent:'space-around'}}>
          <Module title="Name Activity"/>
          <Module title="Community Activity"/>
          <Module title="Role Model Activity"/>
        </div>
        <div style={{display:'flex', zIndex:2, flexDirection:'row', justifyContent:'space-around'}}>
          <Module title="My Roots Activity"/>
          <Module title="Community Issue Activity"/>
          <Module title="[nothing]"/>
        </div>
        {/* <div style={{display:'flex', zIndex:2, flexDirection:'row', justifyContent:'space-around'}}>
          <Module title="Facilitator Guide"/>
          <Module title="Student Workbook"/>
          <Module title="Computer Clubhouse 2019"/>
        </div> */}
        <div style={{position:'absolute', zIndex:2,}}>
        {
          this.props.display
          ?
          this.props.module
          :
          null
        }
        </div>
        {/* <div style={{display:'flex', zIndex:1, position:'absolute', height:'100%', width:'100%', minHeight:'800px', minWidth:'1000px'}}
          onClick={()=>{this.props.changeDisplay(false,null)}}>
        </div> */}
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
