import React from 'react';
import NinjaProfiles from './organisms/NinjaProfiles';
import styled from 'styled-components';
import './App.css';

const H1 = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 1rem;
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
