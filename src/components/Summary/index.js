import React from 'react';

import Wrapper from './Wrapper';
import ButtonWrapper from './ButtonWrapper';
import Container from '../Container';
import Date from './Date';
import H2 from './H2';
import Link from './Link';
import Button from '../Button';

const Summary = ({date, title, excerpt, path}) => (
  <Wrapper>
    <Container>
      <Date>{date}</Date>
      <H2><Link to={path}>{title}</Link></H2>
      <p>{excerpt}</p>
      <ButtonWrapper>
        <Button to={path}>Read More &rarr;</Button>
      </ButtonWrapper>
    </Container>
  </Wrapper>
);

export default Summary;
