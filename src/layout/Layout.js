import React from 'react';
import GlobalStyle, { css } from './GlobalStyle';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <header></header>
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 550px;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
