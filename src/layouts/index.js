import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../globalStyles';
import 'prismjs/themes/prism.css';

const Wrapper = styled.div`
  background: #fff;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <Wrapper>
        <Header/>
        {children()}  
        <Footer/>
      </Wrapper>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
