import { NavLink } from "react-router-dom";

function Registration() {
  return (
    <div className="home">
      <h1>Registration</h1>
      <div className="row justify-content-center">
        <div className="col-5">
          <form className="mb-4 text-start">
            <div className="mb-3">
              <label for="regEmail" className="form-label">Email address</label>
              <input type="email" className="form-control" id="regEmail"  />
            </div>
            <div className="mb-3">
              <label for="regPass" className="form-label">Password</label>
              <input type="password" className="form-control" id="regPass" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          Already have an account? 
          <NavLink to="/login" className="link text-primary">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Registration;