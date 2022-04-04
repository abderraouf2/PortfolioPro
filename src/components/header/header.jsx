import React from 'react';
import { LogoContainer,HeaderContainer,OptionsContainer,OptionLink } from './header.Style';
import './header.scss';

export default function header () {
  return (
    <HeaderContainer className='navBar'>
      <LogoContainer to='/'>
        Abderraouf
      </LogoContainer>
      <OptionsContainer>
        <OptionLink 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1000}>
          Contact
        </OptionLink>
        <OptionLink 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1000}>
          About
        </OptionLink>
        <OptionLink 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1000}>
          Projects
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  )
}
