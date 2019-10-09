import { createGlobalStyle } from 'styled-components';
import { mediumBlue, lightGray, primaryText, white } from '../css/colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  * + * {
    margin-top: 1rem;
  }

  html, body {
    margin: 0;
    color: ${primaryText};
    font-size: 100%;
    line-height: 1.5;

    /* Remove margin for main div that Gatsby mounts into */

    > div {
      margin-top: 0;
    }
  }

  body {
    background-color: white;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${primaryText};
    font-family: 'Fira Sans', sans-serif;
  
    + * + {
      margin-top: 0.5rem;
    }
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
  }

  a {
    border: 1px solid ${white};
    border-radius: 2px;
    color: ${mediumBlue};
    padding: 4px;

    &:hover {
      background-color: ${lightGray};
    }

    &:focus {
      outline: none;
      border: 1px solid ${mediumBlue}
    }
  }

  strong {
    color: ${primaryText};
  }

  .visually-hidden {
    clip: rect(0px, 0px, 0px, 0px);
    height: auto;
    position: absolute;
    width: 1px;
    white-space: nowrap;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
  }
`;

export default GlobalStyle;
