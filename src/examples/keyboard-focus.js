import React from 'react';
import styled from 'styled-components';
import useToggle from "../hooks/use-toggle";

const AccordionContainer = styled.div`
  position: relative;
  width: 500px;
  padding-left: .5em;
`;

const H2 = styled.h2`
  margin-bottom: 0;
`;

const AccordionContentOffscreen = styled.div`
  left: -500px;
  position: absolute;
  transition: 0.3s all;
  width: 500px;

  ${props => props.expanded && `
    background-color: red;
    left: 0;
  `}
`;

function AccordionContent({ expanded }) {
  return (
    <AccordionContentOffscreen expanded={expanded}>
      <p>Our answer</p>
      <ul>
        <li><a href="http://example.com">Example.com</a></li>
        <li><a href="http://example.com">Example.com</a></li>
      </ul>
    </AccordionContentOffscreen>
  )
}


export function DisappearingFocus() {
  const [isExpanded, setIsExpanded] = useToggle(false);

  return (
    <AccordionContainer>
      <H2><button onClick={setIsExpanded}>FAQ Question 1</button></H2>
      <AccordionContent expanded={isExpanded} />
      <ul>
        <li><a href="http://example.com">Example.com</a></li>
        <li><a href="http://example.com">Example.com</a></li>
      </ul>
    </AccordionContainer>
  )
}