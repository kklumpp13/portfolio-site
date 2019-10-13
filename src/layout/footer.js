import React from 'react';
import styled from 'styled-components';
import { secondary, white } from '../css/colors';

const StyledFooter = styled.footer`
  background-color: ${secondary};
  color: ${white};
  margin-top: 0;
  padding: 1.5rem;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>&#169;Copyright 2019 Krystal Klumpp. All rights reserved.</StyledFooter>
  );
}

export default Footer;