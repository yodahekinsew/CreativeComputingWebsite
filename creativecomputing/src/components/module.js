import React, { Component } from 'react';
import '../App.css';
import scratch_cat from '../img/scratch_cat.png';
import tera_b from '../img/tera_b.svg';
import giga_b from '../img/Giga-b.svg';
import nano_c from '../img/Nano-c.svg';
import pico_a from '../img/Pico-a.svg';
import { connect } from 'react-redux';
import {changeDisplay} from '../actions';


const activityTitles = 
{
  "Name Activity":"Stories of Your Name",
  "Community Activity":"My Community",
  "Role Model Activity":"Role Models",
  "My Roots Activity":"My Roots",
  "Community Issue Activity":"Community Issues",
}

const embedLinks = 
{
  "Name Activity":"https://docs.google.com/presentation/d/e/2PACX-1vTc5wK54ur2NS8yK15UE3cwLHvtyQprkB19HsaWf-FauGXNdvJQEbHjPaf6yFHzXSWcvM3zVgjH9aWa/embed?start=false&loop=false&delayms=3000",
  "Community Activity":"https://docs.google.com/presentation/d/e/2PACX-1vQhPkNEFAcs5xtkdvemNgBd52Ynbv974qTmNvelYr9f6bD8gpJ8ZrF4D4ef10yaVhVEWQKsyLVhlKFK/embed?start=false&loop=false&delayms=3000",
  "Role Model Activity":"https://docs.google.com/presentation/d/e/2PACX-1vSt0sJ_tY3IcB3wU2scS0LQlcPKnPwmR37AoXZtVlNDj7KT6uhR97U8IXaRtFP-41wCK0eGqudT2Y_i/embed?start=false&loop=false&delayms=3000",
  "My Roots Activity":"https://docs.google.com/presentation/d/e/2PACX-1vQUY74jyZ0xUQKUNQZUfjsNM2jKTqJYrgKTEL0cJbCOpjPw9tJ3_WJEVUhHoJQ6BPzgMFr2FKG1n5kZ/embed?start=false&loop=false&delayms=3000",
  "Community Issue Activity":"https://docs.google.com/presentation/d/e/2PACX-1vTr7jj3XXio9qN_xuNX9YOnlRMAUPu1A3uks_bVJoNVNm1K04gqpcMbOX7VayPUo1dkbY6SPG0MwsjC/embed?start=false&loop=false&delayms=3000",
};

const downloadLinks = 
{
  "Name Activity":"https://docs.google.com/presentation/d/1SRSqxonwN3DGrEVyF_KJOMfnWc6btDOnFA5GCXb5D3M/edit?usp=sharing",
  "Community Activity":"https://docs.google.com/presentation/d/1lONlUCs7hQNNXtwfff3-i48u2wHRqVpoMx3zCeyA6Mc/edit?usp=sharing",
  "Role Model Activity":"https://docs.google.com/presentation/d/1B5FgubQ2K6DssUo6N_8l4XR-NMcrhzoo7-d4nESJVLQ/edit?usp=sharing",
  "My Roots Activity":"https://docs.google.com/presentation/d/1zOiabkMCmMr5hLNSTAyjc1cS16fr6FykC0ez7CyaUsk/edit?usp=sharing",
  "Community Issue Activity":"https://docs.google.com/presentation/d/18V_goISu9UhnLblCzjUaNsmrI-q7uPtAhCLjcL7DYeU/edit?usp=sharing",
}

const spriteImages = 
{
  "Name Activity": <img src={scratch_cat} alt={"Scratch Cat"} style={{height:'150px', width:'140px'}}/>,
  "Community Activity": <img src={tera_b} alt={"Scratch Cat"} style={{height:'150px', width:'140px'}}/>,
  "Role Model Activity": <img src={giga_b} alt={"Scratch Cat"} style={{height:'150px', width:'140px'}}/>,
  "My Roots Activity": <img src={nano_c} alt={"Scratch Cat"} style={{height:'150px', width:'140px'}}/>,
  "Community Issue Activity": <img src={pico_a} alt={"Scratch Cat"} style={{height:'150px', width:'140px'}}/>,
}

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
            <div style={{minHeight:'600px', height:'100vh', minWidth:'600px', width:'100vw', alignItems:'center', display:'flex', justifyContent:'center', backgroundColor:'rgba(0,0,0,.5)'}}>
              <div style={{position:'absolute', zIndex:1, height:'100%', width:'100%'}} onClick={()=>{this.props.changeDisplay(false,null)}}/>
              <div style={{minHeight:'500px', zIndex:2, height:'50vh',minWidth:'300px', width:'20vw', color:'whitesmoke', textAlign:'center', alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'#0a82fa', borderRadius:'25px 0px 0px 25px'}}>
                <span style={{fontSize:"40px", fontWeight:'bold', paddingTop:'10px'}}>{activityTitles[this.props.title]}</span>
                {spriteImages[this.props.title]}
                <span style={{fontSize: "20px", paddingBottom:'10px'}}>download the activity <a href={downloadLinks[this.props.title]}>here</a></span>
              </div> 
              <div style={{minHeight:'500px', zIndex:2, height:'50vh', minWidth:'400px', width:'30vw', color: '#abb7c6', textAlign:'center', fontSize:'40px', backgroundColor:'#b3e0ff', borderRadius:'0px 25px 25px 0px'}}>
                <iframe title={this.props.title} src={embedLinks[this.props.title]}
                frameborder="0" width="400" height="500" allowfullscreen="false" mozallowfullscreen="false" webkitallowfullscreen="false"></iframe>
              </div>
            </div>);
          } else {
            this.props.changeDisplay(false, null);
          }
        }}>
        
        <div style={{minWidth:'300px', width:'20vh', minHeight:'150px', height:'7.5vh', backgroundColor:'#b3e0ff', textAlign:'center', borderRadius:'25px 25px 0px 0px'}}>
          {spriteImages[this.props.title]}
        </div>
        <div style={{minWidth:'300px', width:'20vh', minHeight:'50px', height:'2.5vh', backgroundColor:'#0a82fa', textAlign:'center', fontSize:'30px', fontWeight:'bold', color:'whitesmoke', borderRadius:'0px 0px 25px 25px'}}>
          {activityTitles[this.props.title]}
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
