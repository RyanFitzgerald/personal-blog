import React, { Component } from "react";
import Helmet from 'react-helmet';
import Link from "gatsby-link";

import SubHeader from '../components/SubHeader';
import Summary from '../components/Summary';
import Pagination from '../components/Pagination';
 
const IndexPage = ({ data, pathContext }) => {
  const { group, index, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <section>
      <Helmet title="Dev Blog | Ryan Fitzgerald" />
      <SubHeader/>
      {group.map(({ node }) => (
        <Summary 
          key={node.frontmatter.path}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          path={node.frontmatter.path}
        />
      ))}
      {

      }
      <Pagination 
        isFirst={index === 1}
        isLast={index === pageCount}
        nextUrl={nextUrl}
        previousUrl={previousUrl}
      />
    </section>
  );
};
export default IndexPage;