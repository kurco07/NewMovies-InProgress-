import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="./logo.jpg" alt="Logo" />
          <NavLink to="/">Home</NavLink>
        </div>
        <NavLink to="/favoritos">Favoritos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
