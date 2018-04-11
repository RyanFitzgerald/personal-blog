import styled from 'styled-components';
import Link from 'gatsby-link';

const GatsbyLink = styled(Link)`
  color: #3498db;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  margin: 0 10px;
  padding: 10px 0;
  position: relative;
  text-decoration: none;

  &:after {
    background: #3498db;
    content: '';
    display: inline-block;
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
    top: 100%;
    transition: 0.25s ease all;
    width: 100%;
  }
`;

export default GatsbyLink;