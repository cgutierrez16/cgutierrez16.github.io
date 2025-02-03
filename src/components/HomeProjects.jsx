import React from "react";
import ProjectPlaceholder from "../images/ProjectPlaceholder.png";
import spanishproj from "../images/SpanishProj.png";
import nbaimage from "../images/NBAProj.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const HomeProjects = () => {
  return (
    <div className="base">
      <div className="pb-5 mt-5 pt-5">
        <div className="container">
          <div className="row justify-content-begin">
            <div className="col-sm-3">
              <h1
                className="white text-start pb-5 mt-5"
                style={{ fontSize: "70px" }}
              >
                Projects
              </h1>
            </div>
          </div>
        </div>

        {/* Lengua */}
        <div className="container white my-5 project-border proj-card">
          <div className="row py-4">
            <div className="col-sm-6">
              <img
                src={spanishproj}
                alt="Lengua Screenshot"
                className="project-picture"
              />
            </div>
            <div className="col-sm-6">
              <h1 className="project-title text-start pt-4">Lengua</h1>
              <p
                className="text-start pt-4 project-desc text-op"
                style={{ fontSize: "20px" }}
              >
                Language learning apps have gotten stale. It can feel like many
                of the language learning apps out there are just carbon copies
                of eachother. Learning methods are not meant to be "one size
                fits all", which is where this project comes in. The goal of
                Lengua is to use a combination of language learning techniques
                not seen in other apps to devleop conversational fluency like
                never before.
              </p>
              <div className="d-flex justify-content-start pt-2">
                <Link
                  to="/portfolio/projects/lengua"
                  className="nav-link active text-start"
                >
                  <button className="seemore-btn primary">
                    See More <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* NBA Tracker */}
        <div className="container white mb-5 project-border proj-card">
          <div className="glow-nba-project-home"></div>
          <div className="row align-items-center py-4">
            <div className="col-sm-6">
              <h1 className="project-title text-start pt-4 ps-4">
                NBA Tracking Website
              </h1>
              <p
                className="text-start pt-4 project-desc ps-4 text-op"
                style={{ fontSize: "20px" }}
              >
                Tracker.io is an NBA tracking website that allows you keep track
                of all things NBA. It makes use of the BallDontLie API as well
                as API-Sports to provide users with realtime NBA related
                information. While these APIs offer a lot in terms of the
                information they provide, I chose to stick with the most
                relevant statistical data.
              </p>

              <div className="d-flex justify-content-start ps-4 pt-2">
                <Link
                  to="/portfolio/projects/nbatracker"
                  className="nav-link active text-start"
                >
                  <button className="seemore-btn primary">
                    See More <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <img
                src={nbaimage}
                alt="Tracker.io Screenshot"
                className="project-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
