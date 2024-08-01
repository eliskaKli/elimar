import React from 'react';
import './App.css';
 
import { ThemeProvider, theme } from './theme/styled-components';
import GlobalStyle from './theme/global-style';

import Header, { headerData } from './components/Header';
import Gifts from './components/Gifts';
import Place from './components/Misto';
import Program from './components/Program';
import Contact from './components/Contact';
import Ceremony from './components/Ceremony';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <Header headerData={headerData}/>
        </header>       
        <Ceremony /> 
        <Place />
        <Program />
        <Gifts />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
