import React from 'react';
import styled from 'styled-components';
import { InputWrapper, Input, Label, LabelText } from './base-input-labels';

const HelperText = styled.span`
  display: block;
  line-height: 1.5; 
`;

const P = styled.p`
  font-size: 2rem;  
  line-height: 1.5;
  margin-top: 16px;
`;

export function HelperTextInLabel() {
  return (
    <InputWrapper>
      <Label htmlFor="htmlEmail">
        <LabelText>Email</LabelText>
        <HelperText>We will not spam you, or sell your email address.</HelperText>
      </Label>
      <Input type="email" id="htmlEmail" />
    </InputWrapper>
  );
}

export function AriaHelperText() {
  return (
    <InputWrapper>
      <Label htmlFor="ariaEmail">
        Email
      </Label>
      <Input type="email" id="ariaEmail" aria-describedby="emailHelper" />
      <P id="emailHelper">We will not spam you, or sell your email address.</P>
    </InputWrapper>
  );
}