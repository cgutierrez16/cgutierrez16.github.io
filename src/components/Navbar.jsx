import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="base white">
      <div>
        <Link to="/portfolio" class="hurricane-regular logo ps-4">
          CG
        </Link>
      </div>
      <ul class="nav-links">
        <li>
          <Link to="/portfolio">Home</Link>
        </li>
        <li>
          <Link to="/portfolio/projects">Projects</Link>
        </li>
        <li>
          <Link to="/portfolio/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};
