import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';


class Module extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{minHeight:'200px', height:'10vh', minWidth:'300px', width:'20vh'}}
        onClick={()=>{
          console.log(this.props.module);
          if (!this.props.display) {
            this.props.changeDisplay(true,
            <div style={{minHeight:'600px', height:'100%', minWidth:'600px', width:'100vw', display:'flex', justifyContent:'center'}}>
              <div style={{minHeight:'500px', height:'50vh',minWidth:'200px', width:'20vw', backgroundColor:'#abb7c6'}}>

              </div>
              <div style={{minHeight:'500px', height:'50vh', minWidth:'300px', width:'30vw', color: '#abb7c6', textAlign:'center', fontSize:'50px', backgroundColor:'#051c38'}}>
                {this.props.title}
              </div>
            </div>);
          } else {
            this.props.changeDisplay(false, null);
          }
        }}>
        <div style={{minWidth:'300px', width:'20vh', minHeight:'150px', height:'7.5vh', backgroundColor:'#4b688b'}}>
        </div>
        <div style={{minWidth:'300px', width:'20vh', minHeight:'50px', height:'2.5vh', backgroundColor:'#748ba7', textAlign:'center', fontSize:'40px', color:'#051c38'}}>
          {this.props.title}
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

export default connect(mapStateToProps, mapActionsToProps)(Module)
