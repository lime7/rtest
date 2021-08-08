import "./Navbar.scss";
import { NavLink } from 'react-router-dom'
import SignOutBtn from './../SignOutBtn/SignOutBtn';

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to='/' className='navbar-brand'>
          Brand
        </NavLink>
        
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
        </div>

        <SignOutBtn />
      </div>
    </div>
  );
}

export default Navbar;