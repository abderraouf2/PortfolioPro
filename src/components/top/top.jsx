import React from 'react';
import './top.scss'

import { TopContainer,LeftHeadContainer,RightHeaderContainer,Image } from './top.style';
import Header from '../header/header';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
import Raouf from './raouf1.png';



export default function Top({ImgLoadded}) {
  return (
    <TopContainer id='top'>
      <Header />
      <LeftHeadContainer>
      <Fade left cascade>
        CREATIVE
        <br />
        DEVELOPER
        <br />
        <Zoom>
        <Image src={Raouf} onLoad={()=>{ImgLoadded()}} />
        </Zoom>
      </Fade>
      </LeftHeadContainer>
      <RightHeaderContainer>
        <div className='bottom'>
        <Fade left cascade >
          MIMOUNE
          <br />
          ABDERRAOUF
        </Fade>
        <p>
        &#x21C3;
        </p>
        </div>
      </RightHeaderContainer>
    </TopContainer>
  )
}
