import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PlantCard from "./PlantCard";
import { fetchPlants } from "../store/actions";

const Dashboard = (props) => {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    history.push("/");
  };
  useEffect(() => {
    axiosWithAuth()
      .get("/users/users")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="dashboard">
      <nav>
        <Link to="/">
          <button onClick={logout}>Log Out</button>
        </Link>
      </nav>
      <header>
        <h2>Hi, {userData.username}</h2>
        <Link to="/plant-form">
          <button>Add a Plant</button>
        </Link>
      </header>
      <div className="plant-container">
        {userData.plants && userData.plants.length > 0 ? (
          userData.plants.map((plant) => {
            return <PlantCard plant={plant} key={plant.id} />;
          })
        ) : (
          <p>
            You dont have any plants to track <br />
            Please add a plant and check back here later.
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};
export default connect(mapStateToProps, { fetchPlants })(Dashboard);
