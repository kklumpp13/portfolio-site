import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './global-style';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Main = styled.main`
  margin: 0 auto;

  // Max-width: 14400px
  @media screen and (min-width: 62.5em) {
    max-width: 90rem; 
  }
`;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700|Roboto:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
