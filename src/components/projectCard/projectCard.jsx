import React, { useState } from 'react'
import { ProjectTitle,Projectcard,Image,Details,CustomButtonContainer,ImageContainer } from './projectCard.style';
import Cursor from '../cursor/cursor';

import Zoom from 'react-reveal/Zoom';
import '../footer/footer.style.scss';
import './projectcard.scss'



export default function ProjectCard({title,image, desc,url}) {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [mouseIn, setmouseIn] = useState(false);
  return (
    <div style={{height:'100vh',width:'100%',padding:'0 5%',marginBottom:'10%',overflowX:'hidden'}}>
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
        <p>{desc}</p>
        <CustomButtonContainer href={url}>
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
                />
          
        </ImageContainer>
      </Projectcard>
    </Zoom>
        <Cursor mouseIn={mouseIn} className='a' cursorX={cursorX} cursorY={cursorY} text='view more'/>
    </div>
  )
}
