import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Container from '../components/Container';
import PostWrapper from '../components/PostWrapper';
import Share from '../components/Share';

const DateWrapper = styled.span`
  font-size: 0.85em;
  padding-left: 30px;
`;

const TitleWrapper = styled.h1`
  margin-top: 0;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Container>
        <Helmet title={`${post.frontmatter.title} | Ryan Fitzgerald`} />
        <PostWrapper>
          <DateWrapper>
            {post.frontmatter.date}
          </DateWrapper>
          <TitleWrapper>{post.frontmatter.title}</TitleWrapper>        
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostWrapper>
        <Share title={post.frontmatter.title} path={post.frontmatter.path}/>
      </Container>
    )
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
