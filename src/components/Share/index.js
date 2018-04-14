import React from 'react';

import Wrapper from './Wrapper';
import H2 from './H2';
import List from './List';
import Item from './Item';

function Share({ title, path }) {
  const url = encodeURI(`https://blog.ryanfitzgerald.ca${path}`);
  const text = encodeURI(title);
  return (
    <Wrapper>
      <H2>Share This Post</H2>
      <List>
        <Item>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" aria-label="Share on Facebook">
            <svg version="1.1" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1579 128q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-735q-35 0-60-25t-25-60v-1366q0-35 25-60t60-25h1366z"></path>
            </svg>
          </a>
        </Item>
        <Item>
          <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} target="_blank" aria-label="Share on Twitter">
            <svg version="1.1" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </a>
        </Item>
        <Item>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`} target="_blank" aria-label="Share on LinkedIn">
            <svg version="1.1" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
            </svg>
          </a>
        </Item>
        <Item>
          <a href={`mailto:?subject=${text}&body=${url}`} aria-label="Share by Email">
            <svg version="1.1" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
            </svg>
          </a>
        </Item>
      </List>
    </Wrapper>
  );
}

export default Share;