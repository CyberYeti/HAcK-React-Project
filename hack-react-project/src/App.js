import logo from './cristian_aguilar_photo.jpg';
import React, { useState } from 'react';
import AmlanPic from './amlan_pic.jpg';
import './App.css';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! My name is Cristian Aguilar and I am a Mechanical Engineering major. My favorite hobbies include going to the gym, swimming, and learning new instruments.
        </p>
        <a
          className="App-link"
          href="https://github.com/cjaguilar22"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </header>
      <header className="App-header">
        <img src={AmlanPic} className="App-logo" alt="Amlan" />
        <p className="Name-Text">
          Hi, I'm Amlan and I'm a mechanical engineering major. <br />
          I like to workout, play tennis, and make and 3D print projects with CAD.
        </p>
        <button className="button" onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
    </div>
  );
}

export default App;
