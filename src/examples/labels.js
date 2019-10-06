import React from 'react';
import styled from 'styled-components';
import { InputWrapper, Input, Label, P } from './base-input-labels';

const ImplicitInput = styled(Input)`
  margin-top: 0.5rem;
`;

const HiddenLabel = styled(Label)`
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
`;

export function NoLabels() {
  return (
    <InputWrapper>
      <Label>First Name</Label>
      <Input type="text" />
    </InputWrapper>
  );
}

export function ExplicitlyConnectedLabels() {
  return (
    <InputWrapper>
      <Label htmlFor="firstName">First Name</Label>
      <Input id="firstName" type="text" />
    </InputWrapper>
  );
}

export function ExplicitlyConnectedHiddenLabels() {
  return (
    <InputWrapper>
      <HiddenLabel htmlFor="search" className="visually-hidden">Search</HiddenLabel>
      <Input id="search" type="text" placeholder="Search" />
    </InputWrapper>
  );
}

export function ImplicitlyConnectedLabels() {
  return (
    <InputWrapper>
      <Label>
        First Name
          <ImplicitInput type="text" />
      </Label>
    </InputWrapper>
  );
}

export function AriaLabel() {
  return (
    <InputWrapper>
      <P id="firstName">First Name</P>
      <Input type="text" aria-labelledby="firstName" />
    </InputWrapper>
  );
}

export function AriaLabelHidden() {
  return (
    <InputWrapper>
      <Input type="text" aria-label="Search" placeholder="Search" />
    </InputWrapper>
  );
}

