import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlants } from "../store/actions";
import PlantCard from "../components/PlantCard";

const Dashboard = (props) => {
  const { plants } = props;
  useEffect(() => {
    props.fetchPlants(localStorage.getItem("user_id"));
  }, []);

  return (
    <div>
      <nav>
        <div>
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
      {plants && plants.length > 0 ? (
        plants.map((item) => {
          return <PlantCard plant={item} key={item.id} />;
        })
      ) : (
        <p>You have no plants! Please add a plant by clciking add Plant</p>
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
