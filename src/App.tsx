import React from 'react';
import './App.scss';
import './styles.scss';
import Hero from './components/hero/Hero';
import Technologies from './components/technologies/Technologies';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Experience from "./components/experience/Experience";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
