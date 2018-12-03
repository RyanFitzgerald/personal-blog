import React from 'react';

import Button from 'components/Button';

import { NextWrapper, PrevWrapper, Wrapper } from './styles';

const PostNavigation = ({ previous, next }) => {
  return (
    <Wrapper>
      {previous && (
        <PrevWrapper>
          <Button to={previous.path}>&larr; {previous.title}</Button>
        </PrevWrapper>
      )}
      {next && (
        <NextWrapper>
          <Button to={next.path}>{next.title} &rarr;</Button>
        </NextWrapper>
      )}
    </Wrapper>
  );
};

export default PostNavigation;
