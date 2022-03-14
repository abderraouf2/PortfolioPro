import React from 'react';
import { LogoContainer,HeaderContainer,OptionsContainer,OptionLink } from './header.Style'

export default function header () {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        AR
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/'>
          Contact
        </OptionLink>
        <OptionLink to='/'>
          About
        </OptionLink>
        <OptionLink to='/'>
          Projects
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  )
}
