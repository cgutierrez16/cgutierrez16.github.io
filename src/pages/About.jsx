import React from "react";
import AboutPicture from "../images/propic.jpeg";
import balls from "../images/balls-sports.png";
import golf from "../images/birdie.png";
import bench from "../images/bench-press.png";
import mushroom from "../images/mushroom.png";

export const About = () => {
  return (
    <div className="cheat">
      <h1 className="primary-text my-5" style={{ fontSize: "50px" }}>
        Hi, I'm Carlos!
      </h1>
      <div className="container my-5 proj-card white project-rounded">
        <div className="row py-4">
          <div className="col-sm-6 d-flex align-items-center justify-content-center pt-5">
            <div className="glow-about-page"></div>
            <div className="glow-about-page2"></div>
            <div className="glow-about-page3"></div>
            <img
              src={AboutPicture}
              alt="My Image"
              className="about-me-pic"
            />
          </div>

          <div className="col-sm-6 text-start">
            <h2 style={{ fontSize: "40px" }}>Career</h2>
            <p className="project-desc pt-3 font-20 text-op">
              I'm a junior pursuing my Bachelors degree in Computer Science at
              Michigan State University. I'm currently based in the
              Metro-Detroit area and have lived there my whole life. I initially
              started learning how to code in early 2018 and have been
              continuously expanding my knowledge ever since. I have always
              enjoyed the creative aspect of web design and find it to be quite
              relaxing. I had also heard it was relatively easy to get into
              which is why I started my coding journey learning front-end web
              development. Since coming to college I've been exposed much more
              to the realm of software development. It's during this time I
              quickly grew to love the challenge that it offers.
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-6 text-start ps-5">
            <h2 style={{ fontSize: "40px" }}>Personal Life</h2>
            <p className="project-desc font-20 text-op pt-3">
              One thing about me is that I absolutely love sports, and over the
              years my sports interests have definitely changed. Growing up I
              was a huge Detroit Tigers fan, especially during the early 2010's
              (too bad they couldn't win it all). Around 2018 I really started
              paying a lot of attention to the NBA and during the 2024 season I
              really got into football. As far as playing goes, I grew up
              playing soccer for years before transitioning over to basketball.
              Then, around 2019 I started really getting into golf and tennis
              which I still play to this day.
            </p>
          </div>
          <div className="col-sm-3">
            <img src={balls} alt="Sports image" className="about-icon" />
          </div>
          <div className="col-sm-3 d-flex align-items-end pb-5">
            <img src={golf} alt="Golf image" className="about-icon" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <img src={bench} alt="Bench press" className="about-icon" />
          </div>
          <div className="col-sm-3 d-flex align-items-end pb-5">
            <img src={mushroom} alt="Mario mushroom" className="about-icon" />
          </div>
          <div className="col-sm-6 text-start ps-5">
            <p className="project-desc font-20 text-op pt-3">
              Aside from sports, I absolutely love going to the gym. I really
              didn't start getting serious about it until fall 2022 but now it's
              become such a big part of my life. Not only has it been such a
              great stress reliever but it's so rewarding to see all your
              hardwork paying off. I've also always loved video games. As a kid
              I would always play games on the Nintendo, SNES, and PS2 (Super
              Mario World being one of my most favorite games of all time). A
              few years down the line I started really getting into competitive
              shooter games like Valorant, Apex Legends, etc. While I don't play
              nearly as often anymore I still enjoy sitting down and playing
              some games when I got the time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
