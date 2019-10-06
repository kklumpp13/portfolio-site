import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { primaryText, white } from '../css/colors';

const StyledHeader = styled.header`
background: ${white};
border-bottom: 1px solid #ddd;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 550px) / 2);
`;

// TODO: Touch target for links
const NavLink = styled(Link)`
  color: ${primaryText};
  font-size: 1rem;
  margin-right: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid ${primaryText};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Nav = styled.nav`
  margin-top: 0;
`;

function Header() {
  return (
    <StyledHeader>
      <NavLink to="/">Future logo</NavLink>
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
