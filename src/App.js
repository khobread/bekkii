import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">

        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Order</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <h1>Bekkii</h1>
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
          Hello World!
        </a>
      </header>


      <div>

      </div>


      <footer>

      </footer>
    </div>
  );
}

export default App;
