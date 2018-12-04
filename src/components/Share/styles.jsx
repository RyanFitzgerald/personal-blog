import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 30px;
  text-align: center;

  svg {
    height: 20px;
    fill: #525f7f;
    width: 20px;
  }
`;

export const H2 = styled.h2`
  font-size: 25px;
  margin: 0 0 15px;
`;

export const Link = styled.a`
  border: 1px solid #e2e2e2 !important;
  display: inline-block;
  line-height: 15px;
  margin: 5px;
  padding: 5px 25px !important;

  &:hover {
    background: none !important;
    border-color: #525f7f !important;
  }
`;
