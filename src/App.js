import React from 'react'
import Hero from "./components/Hero"
import "./App.css"
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Icon from './components/Icon';

const App = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <ul className="navbar-list">
        <li>
          <a href="#about" onClick={() => scrollToSection('about')}>
            About
          </a>
        </li>
        <li>
          <a href="#project" onClick={() => scrollToSection('project')}>
            Project
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </li>
      </ul>
      <Icon/>
      <div>
        <Hero />
        <section id="about">
          <About/>
        </section>
        <section id="project">
          <Project/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
