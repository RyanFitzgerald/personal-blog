import styled from 'styled-components';

const Link = styled.a`
  color: #676666;
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
    width: 0;
  }

  &:hover {
    color: #3498db;

    &:after {
      width: 100%;
    }
  }
`;

export default Link;