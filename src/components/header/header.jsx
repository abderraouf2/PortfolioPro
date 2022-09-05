import React from 'react';
import { LogoContainer } from './header.Style';
import './header.scss';
import Mobile from './mobile';
import Navigation from './Navigation';
import { useState } from 'react';


export default function Header () {

  const [color,setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 1 ){
      setColor(true)
    }
    else setColor(false)
  }
  window.addEventListener('scroll', changeColor)

  return (
    <div className={ color ? 'headerBg header-bg' : 'headerBg' } >
    
      <LogoContainer  activeClass="logo"
                      to="top"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}>
        M.A
      </LogoContainer>
      <Navigation />
      <Mobile />
    
    </div>
  )
}
