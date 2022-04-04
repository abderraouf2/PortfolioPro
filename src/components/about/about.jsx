import React from 'react';

import { Trapez,Title,Container,Image, Discription } from './about.style';
import Roll from 'react-reveal/Roll'

export default function about() {
  return (
    <Roll>
    <Trapez id='about'>
      <Title>
        About :
      </Title>
      <Container>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'>

        </Image>
        <Discription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi vel voluptatem esse ea neque id maxime, odio delectus sequi tempora a! Exercitationem itaque numquam non error cupiditate voluptatum quasi ducimus. 
        </Discription>
      </Container>
    </Trapez>
    </Roll>
  )
}
