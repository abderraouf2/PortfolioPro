import React from 'react'
import { ProjectTitle,ProjectCard,Image } from './projectCard.style';
import Zoom from 'react-reveal/Zoom';

export default function projectCard({title,image, desc}) {
  return (
    <Zoom>
      <ProjectCard>
        <Image src={image} alt="project 1" />
        <ProjectTitle>{title}</ProjectTitle>
      </ProjectCard>
    </Zoom>
  )
}
