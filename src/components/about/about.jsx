import React from 'react';

import { Trapez,Title,Container,Image, Discription } from './about.style';
import {Zoom, Fade } from 'react-reveal';

export default function about() {
  return (
    <Trapez id='about'>
      <Title>
      <Fade left cascade>
        About :
      </Fade>
      </Title>
      <Container>
      <Zoom>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' />
      </Zoom>
        <Discription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vel voluptatem esse ea neque id maxime, odio delectus sequi tempora a! Exercitationem itaque numquam non error cupiditate voluptatum quasi ducimus. 
        </Discription>
      </Container>
    </Trapez>
  )
}
