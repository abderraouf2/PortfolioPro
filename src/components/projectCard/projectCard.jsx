import React from 'react'
import { ProjectTitle,ProjectCard,Image,Details,CustomButtonContainer,ImageContainer } from './projectCard.style';

import Zoom from 'react-reveal/Zoom';



export default function projectCard({title,image, desc,url}) {
  return (
    <div style={{height:'100vh',width:'100%',padding:'0 5%',marginBottom:'10%'}}>
    <Zoom>
      <ProjectCard>
        <Details>  
        <ProjectTitle>{title}</ProjectTitle>
        <p>{desc}</p>
        <CustomButtonContainer href={url}>
           Live preview
           </CustomButtonContainer>
        </Details>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
      </ProjectCard>
    </Zoom>
    </div>
  )
}
