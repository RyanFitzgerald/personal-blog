import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import { headingColour, mainColour } from '../../variables';

const Link = styled(GatsbyLink)`
  color: ${headingColour};
  text-decoration: none;

  &:hover {
    color: ${mainColour};
  }
`;

export default Link;