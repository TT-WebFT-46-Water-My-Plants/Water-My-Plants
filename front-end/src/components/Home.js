import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <nav>
        <div className="logo">
          <h2>Water My Plants</h2>
        </div>
        <div className="links">
          <Link to="/login">
            <button className="navButton" type="button">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="navButton" type="button">
              Sign up!
            </button>
          </Link>
        </div>
      </nav>
      <div className="main">
        <br />
        <br />
        <h1>Schedule time to feed and/or water your plants</h1>
      </div>
    </div>
  );
}

export default Home;
