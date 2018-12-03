import React from 'react';

import { H2, Wrapper, Link } from './styles';
import FacebookIcon from './icons/facebook.svg';
import TwitterIcon from './icons/twitter.svg';
import MailIcon from './icons/envelope.svg';
import LinkedInIcon from './icons/linkedin.svg';

const Share = ({ title, path }) => {
  const url = encodeURI(`https://blog.ryanfitzgerald.ca${path}`);
  const text = encodeURI(title);

  return (
    <Wrapper>
      <H2>Share This Post</H2>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        aria-label="Share on Facebook"
      >
        <FacebookIcon />
      </Link>
      <Link
        href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
        target="_blank"
        aria-label="Share on Twitter"
      >
        <TwitterIcon />
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`}
        target="_blank"
        aria-label="Share on LinkedIn"
      >
        <LinkedInIcon />
      </Link>
      <Link
        href={`mailto:?subject=${text}&body=${url}`}
        aria-label="Share through email"
      >
        <MailIcon />
      </Link>
    </Wrapper>
  );
};

export default Share;
