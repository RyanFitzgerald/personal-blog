import React from 'react';

import Button from 'components/Button';

import { ButtonWrapper, Date, Excerpt, Link, Title, Wrapper } from './styles';

const Summary = ({ date, excerpt, title, path }) => {
  return (
    <Wrapper>
      <Date>{date}</Date>
      <Title>
        <Link to={path}>{title}</Link>
      </Title>
      <Excerpt>{excerpt}</Excerpt>
      <ButtonWrapper>
        <Button to={path}>Continue Reading &rarr;</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Summary;
