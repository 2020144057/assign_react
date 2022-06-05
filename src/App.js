import './App.css';
import { getBeerByName, getBeers } from './axios';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src='https://lh5.googleusercontent.com/xPKl3x_TAzJY6uTTW3q1Y0K50mhdcKi0T81ut5sanMiHJ7DIz_QB2deGILSv5xzq0iJ6stsHB-NI2F6R45MHychFUNfFiNGuVMrn08rgEBxZYtMtq7eBhvIAFDFbsJZ0aax0amkDY2G_dTO4Fw' /> */}
        <button onClick={() => {
          console.log(getBeers());
        }} />
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
        </a>
      </header>
    </div>
  );
}

export default App;
