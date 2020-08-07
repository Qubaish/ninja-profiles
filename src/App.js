import React from 'react';
import NinjaProfiles from './organisms/NinjaProfiles';
import styled from 'styled-components';
import { device } from './utils/breakpoints';
import './App.css';

const H1 = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 1rem;
  @media ${device.md} { 
    width: 80%;
    padding: 1rem 0;
}
`;

function App() {
  return (
    <div className="App">
      <H1>The fellowship of the tretton37</H1>
      <NinjaProfiles />
    </div>
  );
}

export default App;
