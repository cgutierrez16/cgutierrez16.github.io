import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="base white">
      <div>
        <Link to="/" class="hurricane-regular logo ps-4">
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
  );
};
