import React, { useState } from "react";

import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <nav>
        <div className="logo">
          <h2>Water My Plants App</h2>
        </div>
        <div className="links">
          <Link to="/">
            <button className="navButton" type="button">
              Home
            </button>
          </Link>
          <Link to="/SignUp">
            <button className="navButton" type="button">
              Sign Up!
            </button>
          </Link>
        </div>
      </nav>
      <h2 className="login">Login</h2>
      <div className="login">
        <form>
          <label>
            Username
            <input
              className="form-control"
              type="text"
              name="username"
              value={form.username}
              placeholder="UserName"
            />
          </label>
          <label>
            password
            <input
              className="form-control"
              type="password"
              name="password"
              value={form.password}
              placeholder="Your Password"
            />
          </label>
        </form>
      </div>
    </>
  );
}

export default Login;
