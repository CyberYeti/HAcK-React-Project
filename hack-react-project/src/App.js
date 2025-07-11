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
