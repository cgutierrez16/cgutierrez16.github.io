import React from "react";
import nbaThumbnail from "../images/basketball.png";
import lenguaThumbnail from "../images/green-tree.png";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div>
      <h1 className="base white py-5 primary-text" style={{ fontSize: "50px" }}>
        Projects
      </h1>
      <div className="container pb-5">
        <div className="row justify-content-evenly">
          <div className="col-sm-5 proj-card white project-rounded pb-5">
            <div className="glow-proj-page"></div>
            <div className="glow-proj-page2"></div>
            <img src={nbaThumbnail} class="py-4 project-page-thumbnails" alt="NBA tracker thumbnail" />
            <h5 class="text-start ps-4" style={{ fontSize: "30px" }}>
              NBA Tracking Website
            </h5>
            <p
              class="text-start ps-4 project-desc text-op py-3"
              style={{ fontSize: "18px" }}
            >
              Website built to keep track of individual player stats, team
              records, and more. Created with React and Bootstrap with the help
              of APIs for data retrival.
            </p>
            <Link
              to="/portfolio/projects/nbatracker"
              className="nav-link active text-start ps-4"
            >
              <button className="seemore-btn primary">Learn More</button>
            </Link>
          </div>

          <div class="col-sm-5 proj-card white project-rounded">
            <img
              src={lenguaThumbnail}
              class="py-4 project-page-thumbnails"
              alt="Lengua thumbnail"
            />
            <h5 class="text-start ps-4" style={{ fontSize: "30px" }}>
              Lengua
            </h5>
            <p
              class="text-start ps-4 project-desc text-op py-3"
              style={{ fontSize: "18px" }}
            >
              Lengua is an app that aims to put a unique spin on traditional
              language learning apps. Currently a project that I work on when I
              find freetime from school work. Click below to read more about my
              inspiration, future plans, and more!
            </p>
            <Link
              to="/portfolio/projects/lengua"
              className="nav-link active text-start ps-4"
            >
              <button className="seemore-btn primary mb-4">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
