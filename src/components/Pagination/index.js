import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Button from '../Button';

const PreviousButton = styled(Button)`
  float: left;
  padding: 15px 25px;
`;

const NextButton = styled(Button)`
  float: right;
  padding: 15px 25px;
`;

const Pagination = ({previousUrl, nextUrl, isFirst = false, isLast = false}) => (
  <Wrapper>
    {!isFirst &&
      <PreviousButton to={previousUrl}>&larr; Newer Posts</PreviousButton>
    }
    {!isLast &&
      <NextButton to={nextUrl}>Older Posts &rarr;</NextButton>
    }
  </Wrapper>
);

export default Pagination;
