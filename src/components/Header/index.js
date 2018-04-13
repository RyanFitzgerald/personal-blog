import React from 'react';

import Wrapper from './Wrapper';
import LogoWrapper from './LogoWrapper';
import NavWrapper from './NavWrapper';
import Logo from './logo.png';
import Nav from '../Nav';

function Header() {
  return (
    <Wrapper id="top">
      <LogoWrapper>
        <a href="https://ryanfitzgerald.ca"><img src={Logo} alt="Ryan Fitzgerald"/></a>
      </LogoWrapper>
      <NavWrapper>
        <Nav/>
      </NavWrapper>  
    </Wrapper>
  );
}

export default Header;
