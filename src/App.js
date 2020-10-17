import React, { useState, useEffect } from 'react';
import './App.css';
import Detail from './page/detail.js';
import NavBar from './component/navbar.js';
import Head from './component/head.js';
import Updatedata from './page/updatedata.js';
import Home from './page/home.js';
import Register from './page/register.js';
import Login from './page/login.js';
import Cart from './page/cart.js';
import Search from './page/search.js';
import Allbookrate from './page/allbookrate.js';
import Allbooksale from './page/allbooksale.js';
import Allbooknew from './page/allbooknew.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Head />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route  path="/allbookrate">
          <Allbookrate />
        </Route>
        <Route  path="/allbooksale">
          <Allbooksale />
        </Route>
        <Route  path="/allbooknew">
          <Allbooknew />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/updatedata">
          <Updatedata />
        </Route>
        {/* <Route path="/search/:Type_search/:Product_name">
          <Search />
        </Route> */}
        <Route
          path="/search/:Type_search/:Product_name"
          render={({ match }) => <Search key={match.params.product || 'empty'} />}
        />
        <Route path="/Detail/:Product_ID">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

