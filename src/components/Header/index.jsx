import React from 'react';

import Nav from 'components/Nav';

import { LogoWrapper, NavWrapper, Wrapper } from './styles';
import Logo from './logo.png';

function Header() {
  return (
    <Wrapper id="top">
      <LogoWrapper>
        <a href="https://ryanfitzgerald.ca">
          <img src={Logo} alt="Ryan Fitzgerald" />
        </a>
      </LogoWrapper>
      <NavWrapper>
        <Nav />
      </NavWrapper>
    </Wrapper>
  );
}

export default Header;
