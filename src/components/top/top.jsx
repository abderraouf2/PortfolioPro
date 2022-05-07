import React from 'react';

import { TopContainer,HeadContainer,Span,Div } from './top.style';
import Header from '../header/header';
import Fade from 'react-reveal/Fade';
import Three from '../three-d/three';


export default function Top() {
  return (
    <TopContainer id='top'>
      <Header />
      <HeadContainer>
      <Fade left cascade>
        Hello, my name is &nbsp;
        <Fade left cascade ><Span>Abderraouf</Span></Fade>
        and I'm a web developer
      </Fade>
      </HeadContainer>
      <Div>
      <Three />
      </Div>
    </TopContainer>
  )
}
