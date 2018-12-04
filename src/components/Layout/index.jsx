import React from 'react';

import GlobalStyles from '../../global-styles';
import '../../theme.css';
import Header from 'components/Header';

import { Wrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
