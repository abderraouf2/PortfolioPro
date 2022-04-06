import React from 'react';
import { Image,Container } from './skillIcon.style'

export default function skillIcon({image, title}) {
  return (
    <Container>
      <Image src={image} alt="" />
      <h5>{title}</h5>
    </Container>
  )
}
