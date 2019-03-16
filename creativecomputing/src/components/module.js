import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';

class Module extends Component {
  constructor() {
    super();
    this.state = {display:false}
  }

  render() {
    return (
      <div>
        {
          this.state.display
          ?
          <div style={{minHeight:'200px', height:'20vh', minWidth:'300px', width:'50vh', backgroundColor:'#477286'}}
            onClick={()=>{this.setState({display:false})}}>
          </div>
          :
          <div style={{minHeight:'200px', height:'10vh', minWidth:'300px', width:'20vh'}}
            onClick={()=>{this.setState({display:true})}}>
            <div style={{minWidth:'300px', width:'20vh', minHeight:'150px', height:'7.5vh', backgroundColor:'#477286'}}>
            </div>
            <div style={{minWidth:'300px', width:'20vh', minHeight:'50px', height:'2.5vh', backgroundColor:'#6e91a1', textAlign:'center', fontSize:'40px'}}>
              {this.props.title}
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.newState.display,
  }
}

const mapActionsToProps = {changeDisplay}

export default connect(mapStateToProps, mapActionsToProps)(Module)
