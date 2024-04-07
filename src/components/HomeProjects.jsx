import React from "react";
import ProjectPlaceholder from "../images/ProjectPlaceholder.png";
import ProjectPlaceholder2 from "../images/cryptoproject.png";
import nbaimage from "../images/nbaproject.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        {/* First Project */}
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
                <button className="seemore-btn primary">
                  See More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="col-sm-6">
              <img
                src={nbaimage}
                alt="Placeholder Image"
                className="homenbapic"
              />
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="container white my-5 project-border proj-card">
          <div className="row py-4">
            <div className="col-sm-6">
              <img
                src={ProjectPlaceholder2}
                alt="Placeholder Image"
                className="homenbapic"
              />
            </div>
            <div className="col-sm-6">
              <h1 className="project-title text-start pt-4">
                Crypto Trend Tracker
              </h1>
              <p
                className="text-start pt-4 project-desc text-op"
                style={{ fontSize: "20px" }}
              >
                CryptoTrackr is a comprehensive platform designed to provide
                users with up-to-date information on cryptocurrency prices and
                trends. With a user-friendly interface and intuitive design,
                CryptoTrackr offers real-time tracking of popular
                cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and more.
              </p>
              <div className="d-flex justify-content-start pt-2">
                <button className="seemore-btn primary">
                  See More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
