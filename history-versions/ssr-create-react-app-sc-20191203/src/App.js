import React from 'react';
import logo from './logo.svg';
import mudan from './mudan.jpeg';
import { StyledApp } from './App.style';
console.log(mudan);

function App () {
  return (
    <StyledApp className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <img src={mudan} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </StyledApp>
  );
}

export default App;
