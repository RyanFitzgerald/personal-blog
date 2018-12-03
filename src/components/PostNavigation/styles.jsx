import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 50px;

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const PrevWrapper = styled.div`
  float: left;
`;

export const NextWrapper = styled.div`
  float: right;
`;
