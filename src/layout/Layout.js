import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './global-style';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Main = styled.main`
  margin: 16px auto 48px;
  border: 1px solid pink;

  @media screen and (min-width: 49.1875em) {
    max-width: 70rem; 
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
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans|Roboto&display=swap" rel="stylesheet"></link>
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
