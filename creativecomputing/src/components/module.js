import React, { Component } from 'react';
import '../App.css';
import scratch_cat from '../img/scratch_cat.png';
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';

class Module extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{minHeight:'200px', height:'10vh', minWidth:'300px', width:'20vh', borderRadius:'25px'}}
        onClick={()=>{
          console.log(this.props.module);
          if (!this.props.display) {
            this.props.changeDisplay(true,
            <div style={{minHeight:'600px', height:'100%', minWidth:'600px', width:'100vw', alignItems:'center', display:'flex', justifyContent:'center'}}>
              <div style={{position:'absolute', zIndex:1, height:'100%', width:'100%'}} onClick={()=>{this.props.changeDisplay(false,null)}}/>
              <div style={{minHeight:'500px', zIndex:2, height:'50vh',minWidth:'200px', width:'20vw', alignItems:'center', display:'flex', justifyContent:'center', backgroundColor:'#abb7c6', borderRadius:'25px 0px 0px 25px'}}>
                <img src={scratch_cat} style={{height:'300px', width:'260px'}}/>
              </div>
              <div style={{minHeight:'500px', zIndex:2, height:'50vh', minWidth:'300px', width:'30vw', color: '#abb7c6', textAlign:'center', fontSize:'40px', backgroundColor:'#051c38', borderRadius:'0px 25px 25px 0px'}}>
                {this.props.title}
              </div>
            </div>);
          } else {
            this.props.changeDisplay(false, null);
          }
        }}>
        <div style={{minWidth:'300px', width:'20vh', minHeight:'150px', height:'7.5vh', backgroundColor:'#4b688b', textAlign:'center', borderRadius:'25px 25px 0px 0px'}}>
          <img src={scratch_cat} style={{height:'150px', width:'140px'}}/>
        </div>
        <div style={{minWidth:'300px', width:'20vh', minHeight:'50px', height:'2.5vh', backgroundColor:'#748ba7', textAlign:'center', fontSize:'25px', color:'#051c38', borderRadius:'0px 0px 25px 25px'}}>
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
