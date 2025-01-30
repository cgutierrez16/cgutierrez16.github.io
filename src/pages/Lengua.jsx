import React from "react";
import homePageScreenshot from "../images/SpanishProj.png";
import featuresScreenshot from "../images/lengua2.png";
import lenguaLogo from "../images/green-tree.png";

export const Lengua = () => {
  return (
    <div className="cheat">
      <div className="container my-5 proj-card white project-rounded">
        <div className="row">
          <div className="col">
            <div className="glow-home-header"></div>
            <div className="glow-home-header2"></div>
            <div className="glow-home-header3"></div>
            <h1 className="white py-4" style={{ fontSize: "50px" }}>
              Lengua
            </h1>
          </div>
        </div>
        <div className="row my-3 align-items-center">
          <div className="col-sm-6">
            <img
              src={homePageScreenshot}
              alt="Lengua homepage"
              className="rounded-img project-picture"
            />
          </div>

          <div className="col-sm-6 text-start project-desc font-20 text-op">
            <p>
              Lengua is a website that I am currently working on to help those
              trying to learn Spanish. While it is geared towards one language
              it really would not be hard to support a wide variety of languages
              in the future. The inspiration for this project came from a road
              block I was having with my own Spanish journey. I was finding that
              as I got more advanced with the langauge, common learning apps
              such as Duolingo just weren't cutting it anymore. For me
              personally, I've found that the most effective methods for
              learning Spanish don't have easy to use, digital modes.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6">
            <p className="project-desc font-20 text-start ps-5 text-op">
              The biggest feature Lengua will have is a lyric translator. The
              idea is that you can search for any song you would like and Lengua
              will generate a fill in the blank style section for you to try and
              translate the lyrics. Once you have typed out your translation it
              will then grade how well you did and give you feedback. Later down
              the line I would like to add more features that take advantage of
              more unique language learning methods that you don't really find
              on apps.
            </p>
          </div>

          <div className="col-sm-6">
            <img src={featuresScreenshot} alt="Features screenshot" className="project-picture" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6">
            <img src={lenguaLogo} alt="Lengua Logo" />
          </div>

          <div className="col-sm-6">
            <p className="project-desc font-20 text-start text-op">
              This is my second React app that I built on my own, the first
              being my NBA Tracker. So not only has this project given me more
              practice to refine my React and other front-end skills, it has
              also taught me a lot on the back-end. I've used node in the past
              for other projects but never got too involved in it. With how
              complex this project is I needed to expand my knowledge. This is
              also the first project I've built that needs to use a database so
              I had to learn SQL and gained experience with Postgres and Positco
              2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
