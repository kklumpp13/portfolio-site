import React from 'react'
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Div = styled.div`
  margin: 0 auto;
  padding: .8rem;

  @media screen and (min-width: 61.25em) {
    max-width: 80%;
  }
`;

function Slide({ children }) {
  return (
    <Main>
      <Div>
        {children}
      </Div>
    </Main>
  )
}

export default Slide;