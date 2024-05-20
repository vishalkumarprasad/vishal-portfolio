import React, { useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaDev, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import Projects from './Projects';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <section id="page1" className="page">
        <div className="content">
          <p className="intro">hi, I'm</p>
          <h1>
            <ReactTyped
              strings={['Vishal Kumar Prasad']}
              typeSpeed={100}
              backSpeed={50}
              loop={false}
            />
          </h1>
          <h2>Data Engineer</h2>
          <p className="tags">PotterHead | Traveller | GadgetGeek | Inquisitive | Cinephile</p>
          <div className="icons">
            <a href="https://github.com"><FaGithub /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
            <a href="https://dev.to"><FaDev /></a>
            <a href="mailto:someone@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </section>
      <section id="page2" className="page">
        <Projects />
      </section>
      <section id="page3" className="page">
        <h2>Page 3</h2>
        <p>Content for page 3.</p>
      </section>
      <section id="page4" className="page">
        <h2>Page 4</h2>
        <p>Content for page 4.</p>
      </section>
      <section id="page5" className="page">
        <h2>About Me</h2>
        <p>
          Hi, I'm Vishal Kumar Prasad, a dedicated Data Engineer with a passion for exploring and understanding data to uncover hidden insights. With a love for technology and a knack for problem-solving, I thrive in environments that challenge me to grow and innovate.
        </p>
        <p>
          Outside of work, I'm an avid PotterHead, a keen traveller who loves to explore new places, and a gadget geek always on the lookout for the latest tech trends. I enjoy diving into new books and movies as an inquisitive cinephile, constantly seeking to expand my knowledge and experience.
        </p>
      </section>
    </div>
  );
}

export default App;
