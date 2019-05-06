import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../helpers/globalStyle'
import Sections from '../sections'
const Container = styled.div`
  padding-right: 0.9rem;
  padding-left: 0.9rem;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  width: 40rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sections/>
      </Container>
    </>
  );
}

export default App;
