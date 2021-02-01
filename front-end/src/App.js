import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./forms/Login";
import SignUp from "./forms/SignUp";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { fetchPlants } from "./store/actions";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/register" component={SignUp} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchPlants })(App);
