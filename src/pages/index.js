import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import SubHeader from 'components/SubHeader';
import Summary from 'components/summary';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <SubHeader />
        <Layout location={this.props.location} title={siteTitle}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={siteTitle}
          />

          <div style={{ padding: '50px 0' }}>
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug;
              return (
                <Summary
                  key={node.fields.slug}
                  path={node.fields.slug}
                  excerpt={node.excerpt}
                  title={title}
                  date={node.frontmatter.date}
                />
              );
            })}
          </div>
        </Layout>
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
