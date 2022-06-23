import React from 'react';
import { OptionsContainer,OptionLink } from './header.Style';
import Fade from 'react-reveal/Fade';
import './header.scss'



export default function Navlinks({CloseNav}) {
  return (
    <div className='navlinks'>
      <Fade bottom >
    <OptionsContainer classeName='options' >
        <OptionLink 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    onClick={CloseNav}
                    > 
          About
        </OptionLink>
        
        <OptionLink 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    onClick={CloseNav}
                    >
          WORK
        </OptionLink>
        <OptionLink 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    onClick={CloseNav}
                    >
          Contact
        </OptionLink>
      </OptionsContainer>
        </Fade>
    </div>
  )
}
