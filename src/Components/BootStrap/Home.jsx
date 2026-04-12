// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="text-center py-5">
    <h1>Welcome to ZomatoClone</h1>
    <p>Find restaurants, browse menus, add to cart.</p>
    <Link to="/menu" className="btn btn-primary">Explore Restaurants</Link>
  </div>
);

export default Home;
