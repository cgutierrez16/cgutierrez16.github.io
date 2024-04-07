import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="base white">
      <div>
        <Link to="/" class="logo ps-4">
          CG
        </Link>
      </div>
      <ul class="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>

    /*
    <div className="base">
      <nav class="navbar navbar-expand-lg bg-body-tertiary base">
        <div class="container-fluid base">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" className="nav-link active">
                  <span className="white">CG</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link active">
                  <span className="white">Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/projects" className="nav-link active">
                  <span className="white">Projects</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" className="nav-link active">
                  <span className="white">About Me</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    */
  );
};
