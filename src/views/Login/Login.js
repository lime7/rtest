import { NavLink } from "react-router-dom";
import getFirebase from "../../firebase";
import useInput from "../../useInput";

function Login() {
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");

  const signIn = async (event) => {
    event.preventDefault();
    const firebaseInstance = getFirebase();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        console.log("User:", user);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className="home">
      <h1>Log In</h1>
      <div className="row justify-content-center">
        <div className="col-5 pb-4">

          <form className="mb-4 text-start" onSubmit={signIn}>
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