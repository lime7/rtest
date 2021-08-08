import "./Home.scss";
import logo from '../../assets/images/logo.svg';

import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Home page</h1>
      <div className="row justify-content-center py-4">
        <div className="col-2">
          <NavLink to="/login" className="btn btn-primary w-100">
            LogIn
          </NavLink>
        </div>
        <div className="col-2">
          <NavLink to="/login" className="btn btn-primary w-100">
            Registration
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;