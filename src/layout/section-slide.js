import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SectionSlide({ children }) {
  return (
    <Main>
      <div>
        {children}
      </div>
    </Main>
  )
}

export default SectionSlide;