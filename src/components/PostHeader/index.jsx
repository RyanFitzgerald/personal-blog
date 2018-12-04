import React from 'react';

import { Date, Title } from './styles';

const PostHeader = ({ title, date }) => {
  return (
    <div>
      <Date>{date}</Date>
      <Title>{title}</Title>
    </div>
  );
};

export default PostHeader;
