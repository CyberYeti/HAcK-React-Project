import React, {useState} from 'react';
import logo from './cristian_aguilar_photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-hover">
          Hello! My name is Cristian Aguilar and I am a Mechanical Engineering major. My favorite hobbies include going to the gym, swimming, and learning new instruments.
        </p>
        <a
          className="App-link text-hover"
          href="https://github.com/cjaguilar22"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
