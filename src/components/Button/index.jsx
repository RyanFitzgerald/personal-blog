import { Link } from 'gatsby';
import styled from 'styled-components';

const Button = styled(Link)`
  border: 1px solid #e6e6e6;
  border-radius: 25px;
  color: #525f7f;
  display: inline-block;
  font-size: 0.75em;
  font-weight: 700;
  padding: 5px 25px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    border-color: #525f7f;
  }
`;

export default Button;
