import React, { createContext, useEffect, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Bookings from "./Components/Dashboard/Bookings/Bookings";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import axios from "axios";
import Error from "./Components/Error/Error";
import Checkout from "./Components/Checkout/Checkout/Checkout";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
export const UserContext = createContext();

function App() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    axios({
      method: 'post',
      url: 'https://desolate-ravine-36439.herokuapp.com/checkAdmin',
      data: user
    })
      .then(async data => {
        await setIsAdmin(data.data)
      })
  }, [user])

  return (
    <UserContext.Provider value={[isAdmin, setIsAdmin]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/checkout/:_id'>
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Bookings />
          </PrivateRoute>
          <PrivateRoute path='/bookings'>
            <Bookings />
          </PrivateRoute>
          {!isAdmin &&
            <PrivateRoute path='/addReview'>
              <AddReview />
            </PrivateRoute>}
          {isAdmin &&
            <PrivateRoute path='/addServices'>
              <AddServices />
            </PrivateRoute>}
          {isAdmin &&
            <PrivateRoute path='/addAdmin'>
              <AddAdmin />
            </PrivateRoute>}
          {isAdmin &&
            <PrivateRoute path='/manage'>
              <ManageServices />
            </PrivateRoute>}
          <Route path='*'>
            <Error />
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
