import React from 'react';
import styled from 'styled-components';
import * as color from '../css/colors';

const StyledButton = styled.button`
  background-color: ${color.MediumBlue};
  border: 2px solid #00809c;
  border-radius: 2px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.012rem;
  line-height: 1.5;
  min-width: 5rem;
  padding: 0.75rem 1rem;
  word-spacing: 0.16rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #00809c;
  }
`;

export const SpanButton = () => <StyledButton as="span">Next</StyledButton>;

export const AriaButton = () => <StyledButton as="span" role="button">Next</StyledButton>;

export const RegularButton = () => <StyledButton>Next</StyledButton>;