import React, { useState } from 'react';
import { Footer1,A,Email,Contact } from './footer.style';
import { icons } from './icons';
import './footer.style.scss';
import Cursor from '../cursor/cursor';
import Fade from 'react-reveal/Fade';



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
      
          <Email >
            <p className='workT' >
                  let's work together
            </p>
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
                  <Fade>
                    abderraouf.mimoune@inttic.dz
                  </Fade>
            </a>
         <Cursor mouseIn={mouseIn} cursorX={cursorX} cursorY={cursorY} text='send me an email' />
          </Email>
          <Contact>
            {
              icons.map(icon=><A style={{cursor:'pointer', color:`${icon.color}`}} href={icon.to}> {icon.title} </A> )
            }
          </Contact>
        {/* <a href="https://react-icons.github.io/react-icons/search?q=close" class="fa fa-twitter"></a>  */}
    </Footer1>
  )
}
