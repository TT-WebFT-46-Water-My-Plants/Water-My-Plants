import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  const schema = yup.object().shape({
    username: yup.string().required("Incorrrect username"),
    password: yup.string().required("Incorrect password"),
  });

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, []);

  const change = (event) => {
    const { value, name } = event.target;
    setFormErrors(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // const authUser = {
    //   username: form.username.trim(),
    //   password: form.password.trim()
    // };
    //axios call with auth goes here (Eli don't touch this)
  };

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
        <form onSubmit={submit}>
          <label>
            Username
            <input
              className="form-control"
              type="text"
              name="username"
              value={form.username}
              placeholder="UserName"
              onChange={change}
            />
          </label>
          <div style={{ color: "red" }}>{errors.username}</div>
          <br></br>
          <label>
            Password
            <input
              className="form-control"
              type="password"
              name="password"
              value={form.password}
              placeholder="Your Password"
              autocomplete="curren-password"
              onChange={change}
            />
          </label>
          <div style={{ color: "red" }}>{errors.password}</div>
          <br></br>
          <Link to="/dashboard">
            <button className="form-control">Login</button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
