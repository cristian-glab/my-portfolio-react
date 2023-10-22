import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import './styles.scss';
import Hero from './components/hero/Hero';
import Technologies from './components/technologies/Technologies';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Technologies/>
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
*/