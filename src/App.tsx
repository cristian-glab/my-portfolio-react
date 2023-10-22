import React from 'react';
import './App.scss';
import './styles.scss';
import Hero from './components/hero/Hero';
import Technologies from './components/technologies/Technologies';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Technologies/>
      <Projects/>
    </div>
  );
}

export default App;
