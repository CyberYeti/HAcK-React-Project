import YMPic from './Yit-Meng_Pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={YMPic} className="App-logo" alt="logo" />
        <p className="Name-Text">
          Yit-Meng Chin
        </p>
        <p>
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
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
