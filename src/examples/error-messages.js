import React from 'react';
import styled from 'styled-components';
import { FaExclamationCircle } from 'react-icons/fa';
import { InputWrapper, Input, Label, LabelText } from './base-input-labels';

const ErrorText = styled.span`
  display: block;
  line-height: 1.5; 
  color: #d20023;
`;

const P = styled.p`
  color: #d20023;
  font-size: 2rem;  
  line-height: 1.5;
  margin-top: 16px;
`;

const InputWithError = styled(Input)`
  border-color: #d20023;
`;

export function ErrorTextInLabel() {
  return (
    <InputWrapper>
      <Label htmlFor="firstName">
        <LabelText>First Name</LabelText>
        <ErrorText><FaExclamationCircle />A first name is required.</ErrorText>
      </Label>
      <InputWithError type="text" id="firstName" />
    </InputWrapper>
  );
}

export function AriaErrorText() {
  return (
    <InputWrapper>
      <Label htmlFor="firstName">
        Email
      </Label>
      <InputWithError type="text" id="firstName" aria-describedby="firstNameHelper" />
      <P id="firstNameHelper"><FaExclamationCircle />A first name is required.</P>
    </InputWrapper>
  );
}

export function AriaInvalid() {
  return (
    <InputWrapper>
      <Label htmlFor="firstName">
        <LabelText>First Name</LabelText>
        <ErrorText><FaExclamationCircle />A first name is required.</ErrorText>
      </Label>
      <InputWithError type="text" id="firstName" aria-invalid="true" />
    </InputWrapper>
  );
}

