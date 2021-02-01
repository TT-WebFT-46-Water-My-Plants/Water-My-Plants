import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlants } from "../store/actions";

const Dashboard = (props) => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};
export default connect(mapStateToProps, { fetchPlants })(Dashboard);
