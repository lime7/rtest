import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Login from './views/Login/Login';
import Registration from './views/Registration/Registration';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="container pt-4">
          <Switch>
            <Route component={Home} path={'/'} exact />
            <Route component={About} path={'/about'} />
            <Route component={Login} path={'/login'} />
            <Route component={Registration} path={'/registration'} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
