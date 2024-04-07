import React from "react";
import ProjectPlaceholder from "../images/nbaproject.png";
import ProjectPlaceholder2 from "../images/cryptoproject.png";
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
            <img src={ProjectPlaceholder} class="py-4" alt="..." />
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
              to="/projects/nbatracker"
              className="nav-link active text-start ps-4"
            >
              <button className="seemore-btn primary">Learn More</button>
            </Link>
          </div>

          <div class="col-sm-5 proj-card white project-rounded">
            <img src={ProjectPlaceholder2} class="py-4" alt="..." />
            <h5 class="text-start ps-4" style={{ fontSize: "30px" }}>
              Crypto Trend Tracker
            </h5>
            <p
              class="text-start ps-4 project-desc text-op py-3"
              style={{ fontSize: "18px" }}
            >
              CryptoTrackr is a comprehensive platform designed to provide users
              with the most up-to-date and accurate information on
              cryptocurrency prices and trends.
            </p>
            <Link
              to="/projects/crypto-tracker"
              className="nav-link active text-start ps-4"
            >
              <button className="seemore-btn primary">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
