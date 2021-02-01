import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

import "./SignUp.css";
import * as yup from "yup";

const inititalValues = {
  username: "",
  phoneNumber: "",
  password: "",
};

function Signup() {
  const [form, setForm] = useState(inititalValues);

  const [errors, setErrors] = useState({
    username: "",
    phoneNumber: "",
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

  const change = (event) => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, value);
    setForm({ ...form, [name]: valueToUse });
  };

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .min(10, "Phone number must include area code"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is required and must be at least 6 characters long"),
  });

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const newUser = {
      username: form.username.trim(),
      phoneNumber: form.phoneNumber.trim(),
      password: form.password.trim(),
    };
    axios
      .post("/auth/register", newUser)
      .then((res) => {
        console.log("Login res: ", res);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.data.id);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
    setForm(inititalValues);
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
          <Link to="/Login">
            <button className="navButton" type="button">
              Sign in!
            </button>
          </Link>
        </div>
      </nav>
      <h2 className="login">Sign up</h2>
      <div className="signup">
        <form onSubmit={submit}>
          <label>
            UserName
            <input
              className="form-control"
              type="text"
              name="username"
              value={form.username}
              onChange={change}
              placeholder="UserName"
            />
          </label>
          <div style={{ color: "red" }}>{errors.username}</div>
          <br></br>
          <label>
            Your Phone Number
            <input
              className="form-control"
              onChange={change}
              name="phoneNumber"
              type="tel"
              value={form.phoneNumber}
              placeholder="Your Phone Number"
            />
          </label>
          <div style={{ color: "red" }}>{errors.phoneNumber}</div>
          <br></br>
          <label>
            Password
            <input
              className="form-control"
              onChange={change}
              name="password"
              type="password"
              value={form.password}
              placeholder="Your Password"
            />
          </label>

          <div style={{ color: "red" }}>{errors.password}</div>

          <br />
          <button
            className="form-control"
            disabled={form.disabled}
            onSubmit={submit}
            type="submit"
          >
            Submit!
          </button>

          <br></br>
          <br></br>
          <Link to="/Login">
            <button className="form-control">Already a user?</button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
