import styled from 'styled-components';
import Link from 'gatsby-link';
import { borderColour, textColour } from '../../variables';

const Button = styled(Link)`
  border: 1px solid ${borderColour};
  border-radius: 25px;
  color: ${textColour};
  display: inline-block;
  font-size: 0.75em;
  font-weight: 700;
  padding: 5px 25px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-color: ${textColour};
  }
`;

export default Button;