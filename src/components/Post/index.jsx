import styled from 'styled-components';

const Post = styled.div`
  padding: 100px 0 50px;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0 30px;
  }

  a {
    border-bottom: 2px solid #87cdff;
    color: #525f7f;
    padding: 0 2px;
    text-decoration: none;
    transition: 0.25s ease background;

    &:hover {
      background: #87cdff;
    }
  }

  ul,
  ol {
    padding-left: 75px;
  }

  li {
    p {
      margin: 0;
      padding: 0;
    }
  }

  blockquote {
    font-style: italic;
  }
`;

export default Post;
