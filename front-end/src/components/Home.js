import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Nav */}
      <nav>
        <div className="logo">
          <h2>Water Your Plants</h2>
        </div>
        <div className="links">
          <Link to="/Login">
            <button className="navButton" type="button">
              Login
            </button>
          </Link>
          <Link to="/Signup">
            <button className="navButton" type="button">
              Sign up!
            </button>
          </Link>
        </div>
      </nav>
      {/*End Nav */}
      <div className="main">
        <br></br>
      </div>

      <h1>Keep track of your plants watering time!</h1>
    </>
  );
}

export default Home;
