import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../image/plantpic001.jpg";
import "./Home.css";

function Home(props) {
  const history = useHistory();

  const routeToLogin = () => {
    history.push("/login");
  };

  const routeToRegister = () => {
    history.push("/register");
  };

  return (
    <div className="Home-wrapper">
      <div className="Left-side">
        <div className="text-container">
          <h1>Water My Plants</h1>
          <p>
            NEVER FORGET WHEN IT'S TIME TO <br />
            FEED YOUR FOLIAGE AND QUENCH <br />
            YOUR PLANTS' THIRST.
          </p>
          <div className="btn-container">
            <Link to="login">
              <button onClick={routeToLogin}>LOG IN</button>
            </Link>
            <Link to="register">
              <button onClick={routeToRegister}>SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Right-side"></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {})(Home);
