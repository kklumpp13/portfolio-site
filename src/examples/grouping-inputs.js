import React from 'react';
import styled from 'styled-components';
import { InputWrapper, Input, Label, RadioWrapper, RadioButton } from './base-input-labels';

const Fieldset = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
`;

const Legend = styled.legend`
  color: #262626;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    flex-grow: 1;
    flex-basis: calc(30% - 10px);
    margin-right: 30px;
  }
`;

const H3 = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

export function UngroupedInputs() {
  return (
    <>
      <H3>Date of birth</H3>
      <Flex>
        <InputWrapper>
          <Label htmlFor="month">Month</Label>
          <Input id="month" type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="day">Day</Label>
          <Input id="day" type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="year">Year</Label>
          <Input id="year" type="text" />
        </InputWrapper>
      </Flex>

      <hr role="presentation" />

      <H3>Do you own a home?</H3>
      <RadioWrapper>
        <RadioButton type="radio" id="yes" value="yes" name="home-ownership" />
        <Label htmlFor="yes">Yes</Label>
      </RadioWrapper>
      <RadioWrapper>
        <RadioButton type="radio" id="no" value="no" name="home-ownership" />
        <Label htmlFor="no">No</Label>
      </RadioWrapper>

    </>
  );
}

export function GroupingWithHtml() {
  return (
    <>
      <Fieldset>
        <Legend>Date of birth</Legend>
        <Flex>
          <InputWrapper>
            <Label htmlFor="month">Month</Label>
            <Input id="month" type="text" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="day">Day</Label>
            <Input id="day" type="text" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="year">Year</Label>
            <Input id="year" type="text" />
          </InputWrapper>
        </Flex>
      </Fieldset>
    </>
  );
}

export function GroupingWithAria() {
  return (
    <>
      <H3 id="dateOfBirth">Date of Birth</H3>
      <Flex row="group" aria-labelledby="dateOfBirth">
        <InputWrapper>
          <Label htmlFor="month">Month</Label>
          <Input id="month" type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="day">Day</Label>
          <Input id="day" type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="year">Year</Label>
          <Input id="year" type="text" />
        </InputWrapper>
      </Flex>
    </>
  );
}