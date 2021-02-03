import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PlantCard from "./PlantCard";
import { fetchPlants } from "../store/actions";

const Dashboard = (props) => {
  console.log(props);
  const { plants } = props;

  useEffect(() => {
    props.fetchPlants(localStorage.getItem("user_id"));
  }, []);

  return (
    <div className="posts wrapper">
      <nav>
        <div className="logo">
          <h2>Water My Plants</h2>
        </div>
        <div className="links">
          <Link to="/PlantForm">
            <button className="navButton" type="button">
              Add Plant
            </button>
          </Link>
          <Link to="/">
            <button className="navButton" type="button">
              Log out
            </button>
          </Link>
        </div>
      </nav>
      <div>
        <Link to="/plantform" className="create-new-plant">
          Create New Plant
        </Link>
      </div>
      {plants && plants.length > 0 ? (
        plants.map((item) => {
          return <PlantCard plant={item} key={item.id} />;
        })
      ) : (
        <p>
          You dont have any
          <br />
          Plants being tracked <br />
          Please add a Plant to track
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};
export default connect(mapStateToProps, { fetchPlants })(Dashboard);
