import React, { useState } from 'react'
import { ProjectTitle,Projectcard,Image,Details,CustomButtonContainer,ImageContainer } from './projectCard.style';
import Cursor from '../cursor/cursor';

import Zoom from 'react-reveal/Zoom';
import '../footer/footer.style.scss';
import './projectcard.scss'


const onload = () =>{
  console.log('loadded');
}


export default function ProjectCard({title,image, desc,url}) {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [mouseIn, setmouseIn] = useState(false);
  return (
    <div className='container' >
    <Zoom>
      <Projectcard>
        <Details>  
        <ProjectTitle
                    className='email'
                    onMouseMove={(e) =>{
                      setCursorX(e.pageX-50)
                      setCursorY(e.pageY-50)
                    }}
                    onMouseLeave={()=>{
                      setmouseIn(false)
                    }}
                    onMouseEnter={()=>{
                      setmouseIn(true)
                    }}
                    >{title}
                    
        </ProjectTitle>
        <p style={{ width:'80%',marginLeft:'5%',fontWeight:'100',textTransform:'lowerCase' }}>{desc}</p>
        <CustomButtonContainer style={{marginLeft:'5%'}} href={url}>
           Live preview
           </CustomButtonContainer>
        </Details>
        
        <ImageContainer href={url}>
          <Image src={image} 
                onMouseMove={(e) =>{
                  setCursorX(e.pageX-50)
                  setCursorY(e.pageY-50)
                }}
                onMouseLeave={()=>{
                  setmouseIn(false)
                }}
                onMouseEnter={()=>{
                  setmouseIn(true)
                }}
                onLoad={onload}
                
                />
          
        <div className='see-more'>
              <div className='more'>
              See <br />
              more
              </div>
        </div>
        </ImageContainer>
      </Projectcard>
    </Zoom>
        <Cursor mouseIn={mouseIn} className='a' cursorX={cursorX} cursorY={cursorY} text='view more'/>
        
  </div>
  )
}
