import React from 'react'
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Div = styled.div`
  margin: 0 auto;
  padding: .8rem;
`;

function FullWidthSlide({ children }) {
  return (
    <Main>
      <Div>
        {children}
      </Div>
    </Main>
  )
}

export default FullWidthSlide;