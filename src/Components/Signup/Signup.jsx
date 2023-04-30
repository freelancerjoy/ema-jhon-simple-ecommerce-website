import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handlesignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(email, password, confirmPassword);
    setError("");
    if (password !== confirmPassword) {
      setError("Your Password Did Not matched");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggeduser = result.user;
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handlesignup}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Cnfirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        <small>
          Alrady have an account? <Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default Signup;
