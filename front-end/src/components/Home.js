import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlants, addPlant } from "../store/actions";
import PlantList from "./PlantList";
import PlantForm from "./PlantForm";

const Home = ({ username, id, fetchPlants, addPlant }) => {
  function useLocalStorage(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [userPlants, setUserPlants] = useState(initialUserPlants);
  console.log(userPlants);

  const [getUsername] = useLocalStorage(username, "username");
  const [getId] = useLocalStorage(id, "id");

  //addPlant
  const plantAdd = (newPlant) => {
    addPlant(newPlant);
  };

  const plantObj = { setUserPlants, id, getId }; // sort into one object to be passed
  useEffect(() => {
    fetchPlants(plantObj); // calls and fetches plant data to be displayed and sorted by the logged in user
  }, [fetchPlants, plantObj]);

  return (
    <div>
      <div className="wrapper">
        <div className="nav">
          Nav Bar
          <button>log out</button>
        </div>
        <section className="sidebar">
          <div className="profile box">
            <div>
              <h2>Profile</h2>
            </div>
            <div> Hello {getUsername}!</div>
            <div className="profile-pic">
              <p className="avatar fa fa-user"></p>
            </div>
          </div>
          <div className="addPlant box">
            {/* Add Plant */}
            <PlantForm plantAdd={plantAdd} id={getId} />
          </div>
        </section>
        <div className="plants box">
          {/* Plants */}
          <PlantList plants={userPlants} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    id: state.id,
  };
};

export default connect(mapStateToProps, { fetchPlants, addPlant })(Home);
