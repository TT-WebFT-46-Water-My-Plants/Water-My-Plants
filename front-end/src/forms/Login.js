import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

const StyledPage = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

const StyledHeader = styled.h2`
  margin-top: 7.5%;
  font-size: 3rem;
  color: darkgreen;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
`;

const StyledUsernameContainer = styled.div`
  width: 90%;
`;

const StyledPasswordContainer = styled.div`
  width: 90%;
`;

const StyledInputBorder = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  background: none;
  outline: none;
`;

const StyledUsernameBorder = styled.div`
  width: 100%;
  height: 0.2em;
  margin-bottom: 10%;
  border-radius: 0.2em;
  background: linear-gradient(to right, #5e42a6, #b74e91);
`;

const StyledPasswordBorder = styled.div`
  width: 100%;
  height: 0.2em;
  margin-bottom: 10%;
  border-radius: 0.2em;
  background: linear-gradient(to right, #5e42a6, #b74e91);
`;

const StyledButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  width: 60%;
  margin: 0 0.5%;
`;

const Login = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        "/user",
        `grant_type=password&username=${form.username}&password=${form.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        history.push("/dashboard");
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledPage className="login">
      <div>
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
            <Link to="/register">
              <button className="navButton" type="button">
                Sign Up!
              </button>
            </Link>
          </div>
        </nav>

        <StyledHeader>Login</StyledHeader>
        <div className="login">
          <StyledForm onSubmit={login}>
            <StyledUsernameContainer>
              <StyledUsernameBorder>
                <label>Username </label>
              </StyledUsernameBorder>
              <StyledInputBorder>
                <StyledInput
                  className="form-control"
                  type="text"
                  name="username"
                  value={form.username}
                  placeholder="UserName"
                  onChange={handleChange}
                />
              </StyledInputBorder>
            </StyledUsernameContainer>

            <br></br>
            <StyledPasswordContainer>
              <StyledPasswordBorder>
                <label>Password</label>
              </StyledPasswordBorder>
              <StyledInputBorder>
                <StyledInput
                  className="form-control"
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Your Password"
                  autocomplete="curren-password"
                  onChange={handleChange}
                />
              </StyledInputBorder>
            </StyledPasswordContainer>

            <br></br>
            <StyledButtonContainer>
              <Link to="/dashboard">
                <StyledButton type="submit">Log in</StyledButton>
              </Link>
              <Link to="/register">
                <StyledButton>New user</StyledButton>
              </Link>
            </StyledButtonContainer>
          </StyledForm>
        </div>
      </div>
    </StyledPage>
  );
};

export default Login;
