import { NavLink } from "react-router-dom";
import getFirebase from "../../firebase";
import useInput from "../../useInput";

function Registration() {
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");

  const signUp = async (event) => {
    event.preventDefault();
    const firebaseInstance = getFirebase();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        console.log("User:", user);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className="home">
      <h1>Registration</h1>
      <div className="row justify-content-center">
        <div className="col-5 pb-5">

          <form className="mb-4 text-start" onSubmit={signUp}>
            <div className="mb-3">
              <label
                htmlFor="regEmail"
                className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="regEmail"
                {...email} />
            </div>
            <div className="mb-3">
              <label
                htmlFor="regPass"
                className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="regPass"
                {...password} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          Already have an account? 
          <NavLink to="/login" className="link text-primary ms-3">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Registration;