import React from 'react';

import { GatsbyLink, RegularLink } from './styles';

const Nav = () => {
  return (
    <nav>
      <RegularLink href="https://ryanfitzgerald.ca/">Home</RegularLink>
      <RegularLink href="https://ryanfitzgerald.ca/#projects">
        Projects
      </RegularLink>
      <GatsbyLink to="/">Blog</GatsbyLink>
      <RegularLink href="https://ryanfitzgerald.ca/#contact">
        Contact
      </RegularLink>
    </nav>
  );
};

export default Nav;
