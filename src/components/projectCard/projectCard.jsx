import React from 'react'
import { ProjectTitle,ProjectCard,Image,Details,ImageContainer,CustomButtonContainer } from './projectCard.style';

import Zoom from 'react-reveal/Zoom';



export default function projectCard({title,image, desc,url}) {
  return (
    <Zoom>
      <ProjectCard>
        <Details>  
        <ProjectTitle>{title}</ProjectTitle>
        <p>{desc}</p>
        <CustomButtonContainer href={url}>
           Live preview
           </CustomButtonContainer>
        
        </Details>
        <Image src={image}  />
        
      </ProjectCard>
    </Zoom>
  )
}
