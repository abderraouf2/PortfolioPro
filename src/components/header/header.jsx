import React from 'react';
import { LogoContainer,HeaderContainer } from './header.Style';
import './header.scss';
import Mobile from './mobile';
import Navigation from './Navigation';


export default function Header () {
  return (
    <HeaderContainer >
      <LogoContainer  activeClass="logo"
                      to="top"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}>
        Mimoune Abderraouf
      </LogoContainer>
      <Navigation />
      <Mobile />
    </HeaderContainer>
  )
}
