import React from 'react';

import { TopContainer,HeadContainer,Span } from './top.style';
import Header from '../header/header';
import Zoom from 'react-reveal/Zoom'

export default function Top() {
  return (
    <TopContainer id='top'>
      <Header />
      <HeadContainer>
      <Zoom left cascade>
        Hello, my name is &nbsp;
        <Zoom right ><Span>Abderraouf</Span></Zoom>
        
        and I'm a web developer
      </Zoom>
      </HeadContainer>
    </TopContainer>
  )
}
