import YMPic from './Yit-Meng_Pic.jpg';
import React, {useState} from 'react';
import logo from './cristian_aguilar_photo.jpg';
import './App.css';

function App() {
  const [isFunnyActive, setFunny] = useState(false);

  function toggleFunny(){
    setFunny(!isFunnyActive)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className= {isFunnyActive ? 'spin': 'normal'}>
          <img src={YMPic} className="App-logo" alt="logo" />
        </div>
        <div className= {isFunnyActive ? 'squareMove': 'normal'}>
          <div className= {isFunnyActive ? 'rspin': 'normal'}>
            <div className= {isFunnyActive ? 'rainbowFast' : 'normal'}>
              <p className="Name-Text">
                Yit-Meng Chin
              </p>
            </div>
          </div>
        </div>
        <div className= {isFunnyActive ? 'squareMove2': 'normal'}>
          <div className= {isFunnyActive ? 'spin' : 'normal'}>
            <p className= {isFunnyActive ? 'rainbow' : 'normal'}>
              Hello, my name is Yit-Meng, I am a CS major. <br/>
              I enjoy reading books, solving rubiks cubes, <br/>
              and building things with my CAD and 3D printing skills.<br/>
              The creation I am most proud of is my self sorting connect 4 
              I call <a className="App-link"
              href="https://makerworld.com/en/models/737254-cascade-connect-a-self-sorting-connect-4#profileId-669364"
              target="_blank"
              rel="noopener noreferrer">
                Cascade Connect
              </a>
              .
            </p>
          </div>
        </div>
        <button className = 'button' onClick={toggleFunny}>
          {isFunnyActive ? 'Disable Funny Mode' : 'Enable Funny Mode'}
        </button>
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
