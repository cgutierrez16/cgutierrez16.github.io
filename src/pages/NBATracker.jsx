import React from "react";
import picture1 from "../images/nbatrackerimage.png";
import picture2 from "../images/ProjectPlaceholder.png";
import picture3 from "../images/ProjectPlaceholder2.png";

export const NBATracker = () => {
  return (
    <div className="cheat">
      <div className="container my-5 proj-card white project-rounded">
        <div className="row">
          <div className="col">
            <h1 className="white py-4" style={{fontSize: '50px'}}>NBA Tracker</h1>
          </div>
        </div>
        <div className="row my-3 align-items-center">
          <div className="col-sm-6">
            <img
              src={picture1}
              alt="NBA Tracker Icon"
              className="rounded-img"
            />
          </div>

          <div className="col-sm-6 text-start project-desc font-20 text-op">
            <p>
              Tracker.io is an NBA tracking website that allows you keep track
              of all things NBA. It makes use of the BallDontLie API as well as
              API-Sports to provide users with realtime NBA related
              information. While these APIs offer a lot in terms of the
              information they provide, I chose to stick with the most relevant
              statistical data. The main features that were added to this site
              include:
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
              biggest reason why I decided to make this is to put my (at the
              time) newfound knowledge of ReactJs to use while also brushing up
              on my other web development skills. Most notably this project gave
              me a lot more practice in working with APIs and displaying the
              data that was retrived. In addition to this, I also used this as
              an opportunity to become proficient in Bootstrap and finally start
              to take advantage of its full potential.
            </p>
          </div>

          <div className="col-sm-6">
            <img src={picture2} alt="Placeholder lol" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6">
            <img src={picture3} alt="" />
          </div>

          <div className="col-sm-6">
            <p className="project-desc font-20 text-start text-op">
              While admittedly not the most impressive creation out there, I
              still got a lot out of this project. Since this was my first
              website built with React it gave me plenty of valuble experience
              with the technology. Scoping out even more, this was the biggest
              project I had worked on up until this point. Not to say that this
              was the hardest thing in the world but it did take a lot of time
              to complete as there were many learning curves I had to traverse.
              In the end, I would say this project gave me lots of valuble and
              essential knowledge to move forward as a developer. This project
              is a sort of stepping stone and will enable me to take on bigger
              and more innovative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
