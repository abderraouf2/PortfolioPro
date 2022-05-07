import React from 'react';
import { LogoContainer,HeaderContainer,OptionsContainer,OptionLink } from './header.Style';
import './header.scss';

export default function header () {
  return (
    <HeaderContainer >
      <LogoContainer  activeClass="active"
                      to="top"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}>
        Abderraouf
      </LogoContainer>
      <OptionsContainer>
        <OptionLink 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}>
          About
        </OptionLink>
        <OptionLink 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}>
          Projects
        </OptionLink>
        <OptionLink 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}>
          Contact
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  )
}
