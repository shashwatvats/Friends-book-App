import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        data-testid="navbar"
        style={{ backgroundColor: "grey" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <h2 style={{ color: "white" }}>
              <b>Friends Book</b>
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="login"
                  to="/friendlist"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  My Friends
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  style={{ color: "white" }}
                  className="nav-link btn btn-primary"
                >
                  Login <i class="fas fa-sign-in-alt"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
