import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="home">
      <h1>Log In</h1>
      <div className="row justify-content-center">
        <div className="col-5">
          <form className="mb-4 text-start">
            <div className="mb-3">
              <label for="loginEmail" className="form-label">Email address</label>
              <input type="email" className="form-control" id="loginEmail" />
            </div>
            <div className="mb-3">
              <label for="loginPass" className="form-label">Password</label>
              <input type="password" className="form-control" id="loginPass" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          Create a new account? 
          <NavLink to="/registration" className="link text-primary">
            Registration
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;