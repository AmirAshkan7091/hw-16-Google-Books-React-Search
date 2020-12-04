import React from "react";
import { Link } from "react-router-dom";

import "../../src";

function Navigation() {
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
      <h1 className="name">Google Book</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <p className="home-button">Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/saved">
                <p className="saved-button">Favorite Books</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
