import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
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
        </a>
      </header>*/}

      <BrowserRouter>
        <Navbar/>
        <div className="container pt-4">
          <Switch>
            <Route component={Home} path={'/'} exact />
            <Route component={About} path={'/about'} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
