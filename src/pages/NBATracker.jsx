import React from "react";
import nbaScreenshot from "../images/NBAProj.png";
import basketballCourt from "../images/basketball-court.png";
import basketballPlayer from "../images/basketball-player.png";

export const NBATracker = () => {
  return (
    <div className="cheat">
      <div className="container my-5 proj-card white project-rounded">
        <div className="row">
          <div className="col">
            <div className="glow-home-header"></div>
            <div className="glow-home-header2"></div>
            <div className="glow-home-header3"></div>
            <h1 className="white py-4" style={{ fontSize: "50px" }}>
              NBA Tracker
            </h1>
          </div>
        </div>
        <div className="row my-3 align-items-center">
          <div className="col-sm-6">
            <img
              src={nbaScreenshot}
              alt="NBA Tracker Icon"
              className="rounded-img project-picture"
            />
          </div>

          <div className="col-sm-6 text-start project-desc font-20 text-op">
            <p>
              Tracker.io is an NBA tracking website that allows you keep track
              of all things NBA. It makes use of the BallDontLie API as well as
              API-Sports to provide users with realtime NBA related information.
              While these APIs offer a lot in terms of the information they
              provide, I chose to stick with the most relevant statistical data.
              The main features that were added to this site include:
            </p>
            <ul>
              <li>
                Scores and top player performances for all games in current
                season
              </li>
              <li>Full player stats for all games in current season</li>
              <li>Player search feature to see individual season stats</li>
              <li>Realtime playoff standings</li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6">
            <p className="project-desc font-20 text-start ps-5 text-op">
              The reason why I settled on a website to track NBA analytics is
              simply because I love basketball. It is clear though that this is
              nothing revolutionary, its been done many times before. The
              biggest reason why I decided to make this, was to put my newfound
              knowledge of ReactJs to use while also brushing up on my other web
              development skills. Most notably this project gave me a lot more
              practice in working with APIs and displaying the data that was
              retrived. In addition to this, I also used this as an opportunity
              to become proficient in the css styling library, Bootstrap.
            </p>
          </div>

          <div className="col-sm-6">
            <img src={basketballCourt} alt="Basketball court icon" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6">
            <img src={basketballPlayer} alt="Basketball player icon" className="pb-5" />
          </div>

          <div className="col-sm-6">
            <p className="project-desc font-20 text-start text-op">
              While admittedly not the most impressive creation out there, I
              still got a lot out of this project. Since this was my first
              website built with React it gave me plenty of valuable experience
              with the technology. Scoping out even more, this was the biggest
              project I had worked on up until this point. Not to say that this
              was the hardest thing in the world but it did take a lot of time
              to complete as there were many learning curves I had to traverse.
              In the end, I would say this project gave me lots of valuable and
              essential knowledge to move forward as a developer. This project
              is a stepping stone and will enable me to take on bigger and more
              innovative projects.
            </p>
            <p className="text-start ">
              *Note: When trying to get screenshots to show off project the APIs
              I used had updated their services and broke 90% of the site. The
              code is on GitHub if you wish to see the work I did.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
