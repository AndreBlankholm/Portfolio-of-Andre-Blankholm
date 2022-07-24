import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfoilo from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Portfoilo/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
