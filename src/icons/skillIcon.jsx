import React from 'react';
import { Image,Container } from './skillIcon.style'
import Fade from 'react-reveal/Fade';
export default function skillIcon({image}) {
  return (
    <Container>
      <Fade>
        <Image src={image} alt="" />
      </Fade>
    </Container>
  )
}
