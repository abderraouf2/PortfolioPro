import React from 'react';
import './top.scss'

import { TopContainer,LeftHeadContainer } from './top.style';
import Header from '../header/header';
import Fade from 'react-reveal/Fade';
import Netflix from './netflix.jpeg';

import {AiOutlineArrowDown} from 'react-icons/ai'



class Top extends React.Component {

  
  // componentDidMount = () => {
  //   const z = document.getElementById('rr');
  //   const ra = () => {
  //     console.log("Helloooooo");
  //   }
    
  //   z.addEventListener("mouseover",ra);
  // }
  render(){
  return (
    <TopContainer id='top'>
      <img className='bgImg' src={Netflix} alt="" />
      {/* <p id='rr' style={{zIndex:'5'}}>Raouf</p> */}
      <Header />
      <LeftHeadContainer>
          <h5>
            Latest project
          </h5>
          <h1>
            Netflix Clone
          </h1>
          <Fade right cascade>
        <p>
          Inspired from netflix. I made this app  with NextJS, Hasura, GraphQL, youtube api...etc.<br /> U can log in, like or dislike a video, and whatch them again if u want
        </p></Fade>
        <a className='see' href="https://netflix-clone-abderraouf2.vercel.app/">see project</a>
        <p className='down'>
          <AiOutlineArrowDown className='downI' /> 
        </p>
      </LeftHeadContainer>
      <div className='clientsWrapper'>  
      <div className='clients'>
      </div>
      </div>
    </TopContainer>
  )
}
}

export default Top;