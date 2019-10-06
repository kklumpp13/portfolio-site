import styled from 'styled-components';
import { darkBlue, mediumBlue } from '../css/colors';

export const Link = styled.a`
  border-radius: 2px;
  color: ${mediumBlue};
  font-size: 2rem;
  line-height: 1.5;
  padding: 1rem;

  &:hover,
  &:focus,
  &:active {
    color: ${darkBlue}
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #00809c;
  }
`;

export const UnstyledButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 2px;
  color: ${mediumBlue};
  font-size: 2rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;

  &:hover,
  &:focus,
  &:active {
    color: ${darkBlue}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #00809c;
  }
`;