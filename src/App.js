import React, { useState, useEffect } from 'react';
import './App.css';
import Detail from './page/detail.js';
import NavBar from './component/navbar.js';
import Head from './component/head.js';
import Admin from './page/admin.js';
import Insert from './page/insert.js';
import Update from './page/update.js';
import Home from './page/home.js';
import Register from './page/register.js';
import Login from './page/login.js';
import Cart from './page/cart.js';
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
          <Home />
        </Route>
        <Route path="/insert">
          <Insert />
        </Route>
        <Route path="/update">
          <Update />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/Detail/:Product_ID">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

