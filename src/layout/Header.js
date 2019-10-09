import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { darkGray, primaryText, white } from '../css/colors';

const StyledHeader = styled.header`
background: ${white};
border-bottom: 1px solid ${darkGray};
display: flex;
padding: 0 13.75rem;
`;

// TODO: Touch target for links
const NavLink = styled(Link)`
  color: ${primaryText};
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 32px;
  padding: 0.5rem .75rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid ${darkGray};
  }

  &:last-of-type {
    margin-right: 0;
    margin-top: 0;
  }
`;

const Nav = styled.nav`
  margin-top: 0;
  margin-left: auto;
`;

function Header() {
  return (
    <StyledHeader>
      <NavLink to="/"><img src="../Logo_sidebyside.svg" alt="Krystal Klumpp logo" /></NavLink>
      <Nav>
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/presentations" activeClassName="current-page">
          Presentations
        </NavLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
