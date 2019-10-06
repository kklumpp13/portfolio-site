import React from 'react';
import styled from 'styled-components';
import useToggle from "../hooks/use-toggle";
import { darkBlue, mediumBlue } from '../css/colors';
import { Link } from './keyboard-functionality';

const AccordionContainer = styled.div`
  position: relative;
  width: 500px;
`;

const H2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 0;
`;

const AccordionButton = styled.button`
  background-color: ${mediumBlue};
  border: 2px solid ${mediumBlue};
  border-radius: 2px;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.012rem;
  line-height: 1.5;
  min-width: 5rem;
  padding: 0.75rem 1rem;
  word-spacing: 0.16rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${darkBlue}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #00809c;
  }
`;

const AccordionContentOffscreen = styled.div`
  left: -10000px;
  position: absolute;
  transition: 0.3s all;
  width: 500px;

  ${props => props.expanded && `
    border: 1px solid #262626;
    left: 0;
    padding: 0 1rem;
  `}
`;

const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 2rem;
`;

const FocusContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #222;
  display: flex;
  flex: 1 0 auto;
  height: 6.25rem;
  justify-content: center;
  margin-bottom: 1rem;

  ${props => props.isDark && `
    background-color: #330072;
    border: 1px solid #330072;
  `}
`;

const LightLink = styled.a`
  color: #00819d;
  font-size: 2rem;
  padding: 1rem;

  &:focus {
    box-shadow: 0 0 0 2px #fff, 0 0 0 5px #004d60;
    outline: none;
  }
`

const DarkLink = styled.a`
  color: #fff;
  font-size: 2rem;
  padding: 1rem;

  &:focus {
    box-shadow: 0 0 0 2px #330072, 0 0 0 5px #004d60;
    outline: none;
  }
`;

function AccordionContent({ expanded }) {
  return (
    <AccordionContentOffscreen expanded={expanded}>
      <P>Inner content</P>
      <ul>
        <li><Link href="http://example.com">Example.com</Link></li>
        <li><Link href="http://example.com">Example.com</Link></li>
      </ul>
    </AccordionContentOffscreen>
  )
}


export function DisappearingFocus() {
  const [isExpanded, setIsExpanded] = useToggle(false);

  return (
    <>
      <Flexbox>
        <AccordionContainer>
          <H2><AccordionButton onClick={setIsExpanded}>Expandable content</AccordionButton></H2>
          <AccordionContent expanded={isExpanded} />
        </AccordionContainer>
        <div>
          <H2>A list of resources</H2>
          <ul>
            <li><Link href="#">Resource one</Link></li>
            <li><Link href="#">Resource two</Link></li>
          </ul>
        </div>
      </Flexbox>
    </>
  )
}

export function FocusRingContrast({ isDark }) {
  return (
    <FocusContainer isDark={isDark}>
      {isDark ? (
        <DarkLink href="#">Failing contrast</DarkLink>
      ) : (
          <LightLink href="#">Passing contrast</LightLink>
        )}
    </FocusContainer>
  )
}