import React from 'react';

import Link from './Link';
import GatsbyLink from './GatsbyLink';

function Nav() {
  return (
    <nav>
      <Link href="https://ryanfitzgerald.ca/">Home</Link>
      <Link href="https://ryanfitzgerald.ca/#projects">Projects</Link>
      <GatsbyLink to="/">Blog</GatsbyLink>
      <Link href="https://ryanfitzgerald.ca/#contact">Contact</Link>
    </nav>
  );
}

export default Nav;