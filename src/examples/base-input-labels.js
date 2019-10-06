import styled from 'styled-components';
import { primaryText } from '../css/colors';

export const InputWrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;
`;

export const Input = styled.input`
  border: 2px solid #949494;
  border-radius: 2px;
  color: #222222;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  width: 100%;

  &:focus {
    border-color: #00809C;
    box-shadow: 0 0 1px 1px #bdf0f8;
    outline: 0;
  }
`;

export const Label = styled.label`  
  color: ${primaryText};
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const LabelText = styled.span`
  color: ${primaryText};
  display: block;
  font-weight: bold;
`;

export const P = styled.p`
  color: ${primaryText};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const RadioWrapper = styled.div`
  margin-bottom: 8px; 
  position: relative;
`;

export const RadioButton = styled.input`
  clip: rect(0px, 0px, 0px, 0px);
  height: auto;
  position: absolute;
  width: auto;
  white-space: nowrap;
  border-width: 0;
  border-style: initial;  
  border-color: initial;
  border-image: initial;
  margin: 0;
  overflow: hidden;
  padding: 0;

  + label {
    color: #262626;
    display: inline-block;
    margin: 3px 0;
    padding-left: 2.5rem;
  }

  + label::before {
    border: 1px solid #262626;
    border-radius: 50%;
    content: "";
    display: block;
    height: 2rem;
    left: 0;
    position: absolute;
    width: 2rem;
  }

  &:checked + label::before {
    background-color: rgb(23, 113, 166);
    box-shadow: rgb(38, 38, 38) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0px 0px 3px inset;
    border-style: initial;
  }

  &:focus + label::after {
    box-shadow: rgb(96, 143, 191) 0px 0px 0px 3px;
    border-radius: 4px;
    content: "";
    height: 2rem;
    left: 0;
    position: absolute;
    top: 1rem;
    width: 2rem;
  }
`;