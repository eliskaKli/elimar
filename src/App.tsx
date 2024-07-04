import React from 'react';
import './App.css';
 
import { ThemeProvider, theme } from './theme/styled-components';
import GlobalStyle from './theme/global-style';

import Gifts from './components/Gifts';
import Place from './components/Misto';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <Place />
          <Gifts />
          <Contact />
        </header>        
      </div>
    </ThemeProvider>
  );
}

export default App;
