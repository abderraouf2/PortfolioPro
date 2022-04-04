import React from 'react';

import { TopContainer,HeadContainer,Span } from './top.style';
import Header from '../header/header';


export default function top() {
  return (
    <TopContainer>
      <Header />
      <HeadContainer>
        Hello, my name is &nbsp;
        <Span>
          Abderraouf 
        </Span>
        <br />
        and I'm a web developer
      </HeadContainer>
    </TopContainer>
  )
}
