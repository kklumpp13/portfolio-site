import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>&#169;Copyright 2019 Krystal Klumpp. All rights reserved.</StyledFooter>
  );
}

export default Footer;