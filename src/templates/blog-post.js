import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import React from 'react';

import Layout from 'components/Layout';
import Post from 'components/Post';
import PostHeader from 'components/PostHeader';
import PostNavigation from 'components/PostNavigation';
import Share from 'components/Share';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    const navProps = {};
    if (next) {
      navProps.next = {
        path: next.fields.slug,
        title: next.frontmatter.title,
      };
    }

    if (previous) {
      navProps.previous = {
        path: previous.fields.slug,
        title: previous.frontmatter.title,
      };
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | Ryan Fitzgerald`}
        />
        <Post>
          <PostHeader
            title={post.frontmatter.title}
            date={post.frontmatter.date}
          />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Share
            title={post.frontmatter.title}
            path={this.props.location.pathname}
          />
        </Post>
        <PostNavigation {...navProps} />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
