import React from 'react';
import './App.css';
import Place from './components/Misto';
import { ThemeProvider, theme } from './theme/styled-components';
import GlobalStyle from './theme/global-style';
import Gifts from './components/Gifts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <div className="App">
      <header className="App-header">
      {/*   <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        
        </a>
         */}
         <Place />
         <Gifts />
      </header>        
    </div>
    </ThemeProvider>
  );
}

export default App;
