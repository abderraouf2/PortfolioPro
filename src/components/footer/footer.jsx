import React, { useState } from 'react';
import { Footer1,A,Email,Contact } from './footer.style';
import { Fade } from 'react-reveal';
import { icons } from './icons';
import {Container,Paragraph,Description} from '../about/about.style';
import './footer.style.scss';
import Cursor from '../cursor/cursor';



export default function Footer() {
  // const a = document.getElementById('c')
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [mouseIn, setmouseIn] = useState(false);

  // a.addEventListener('mousemove',(e)=>{
  //   setCursorX(e.pageX)
  //   setCursorY(e.pageY)
  // })

  return (
    <Footer1 id='contact'>
      
          <Container>
            <Fade>
              <Paragraph>
                03/
              </Paragraph>
              <Description style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5vh'}}>
              <p style={{fontSize:'medium',fontWeight:'400',lineHeight:'1.32',width:'20%'}} >
                want to work together ?
              </p>
              <p style={{fontSize:'medium',fontWeight:'400',lineHeight:'1.32',width:'20%'}} >
                send me an email
              </p>
              </Description>
              </Fade>
          </Container>
          <Email >
            <a 
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
             className='email' href='mailto:raoufmim29@gmail.com' >
                  abderraouf.<br className='br' />mimoune<br />
                  @inttic.dz
            </a>
         <Cursor mouseIn={mouseIn} cursorX={cursorX} cursorY={cursorY} text='send me an email' />
          </Email>
      <Contact>
        {
          icons.map(icon=><A className='email' style={{cursor:'pointer'}} href={icon.to}> {icon.title} </A> )
        }
      </Contact>
        {/* <a href="https://react-icons.github.io/react-icons/search?q=close" class="fa fa-twitter"></a>  */}
    </Footer1>
  )
}
