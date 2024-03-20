import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="KatePro.JPG" className='photo'></img>

        <a href='https://www.linkedin.com/in/kate-galich/' target="_blank">
          <img src="In-Blue-96.png" className='in-logo'></img>
        </a>
      </header>
      <main className='App-main'>
{/* 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="glowing">
          <span style={{"--i":1}}></span>
          <span style={{"--i":2}}></span>
          <span style={{"--i":3}}></span>
        </div>
        <div className="glowing">
          <span style={{"--i":1}}></span>
          <span style={{"--i":2}}></span>
          <span style={{"--i":3}}></span>
        </div>
        <div className="glowing">
          <span style={{"--i":1}}></span>
          <span style={{"--i":2}}></span>
          <span style={{"--i":3}}></span>
        </div>
        <div className="glowing">
          <span style={{"--i":1}}></span>
          <span style={{"--i":2}}></span>
          <span style={{"--i":3}}></span>
        </div>
        <div className="glowing">
          <span style={{"--i":1}}></span>
          <span style={{"--i":2}}></span>
          <span style={{"--i":3}}></span>
        </div>
        <div className="glowing">
          <span style={{"--i":1}}></span>
          <span style={{"--i":2}}></span>
          <span style={{"--i":3}}></span>
        </div>
        <div className="glowing">
          <span style={{"--i":1}}></span>
          <span style={{"--i":2}}></span>
          <span style={{"--i":3}}></span>
        </div>
        <div className="glowing">
          <span style={{"--i":1}}></span>
          <span style={{"--i":2}}></span>
          <span style={{"--i":3}}></span>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
