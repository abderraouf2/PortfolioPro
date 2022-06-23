import React from 'react';
import './top.scss'

import { TopContainer,LeftHeadContainer,RightHeaderContainer,Image } from './top.style';
import Header from '../header/header';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';



export default function Top() {
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
        <Image />
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
