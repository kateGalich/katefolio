import logo from './logo.svg';

import './App.css';
import { ReactTyped } from "react-typed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="KatePro.JPG" className='photo'></img>

        <div>
          <code>
          {" "}
            <ReactTyped strings={["Welcome to my site", "I'm working on it..."]} typeSpeed={120} loop />
          </code>
        </div>

        <a href='https://www.linkedin.com/in/kate-galich/' target="_blank">
          <img src="In-Blue-96.png" className='in-logo'></img>
        </a>
      </header>
      <main className='App-main'>

        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>

      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
