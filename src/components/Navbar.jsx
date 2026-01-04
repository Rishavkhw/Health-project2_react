import React from "react";
import { Link } from "react-router-dom";
import './all.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/home">
          🌾 AgroKart
        </Link>

        {/* Hamburger menu visible only on small screens */}
        <div className="d-lg-none menu-wrapper position-relative">
          <button className="navbar-toggler custom-toggler" id="menu-hover">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Hover-based menu on mobile */}
          <div id="menu1" className="hover-menu position-absolute end-0 d-none flex-column bg-white p-2 rounded shadow">
            <Link className="nav-link text-dark" to="/home">Home</Link>
            <Link className="nav-link text-dark" to="/login">Login</Link>
            <Link className="nav-link text-dark" to="/about">About</Link>
          </div>
        </div>

        {/* Regular navbar menu shown on large screens */}
        <div className="d-none d-lg-flex gap-4">
          <Link className="nav-link text-white" to="/home">Home</Link>
          <Link className="nav-link text-white" to="/login">Login</Link>
          <Link className="nav-link text-white" to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
