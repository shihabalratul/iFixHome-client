import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Bookings from "./Components/Dashboard/Bookings/Bookings";
import AddServices from "./Components/Dashboard/AddServices/AddServices";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <PrivateRoute path='/dashboard'>
          <Bookings />
        </PrivateRoute>
        <PrivateRoute path='/bookings'>
          <Bookings />
        </PrivateRoute>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/addServices'>
          <AddServices />
        </PrivateRoute>

      </Switch>
    </Router>
  );
}

export default App;
