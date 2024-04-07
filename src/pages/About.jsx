import React from "react";
import AboutPicture from "../images/homeaboutperson.png";
import Project1 from "../images/ProjectPlaceholder.png";

export const About = () => {
  return (
    <div className="cheat">
      <h1 className="primary-text my-5" style={{ fontSize: "50px" }}>
        About Me
      </h1>
      <div className="container my-5 proj-card white project-rounded">
        <div className="row py-4">
          <div className="col-sm-6 d-flex align-items-center justify-content-center pt-5">
            <div className="glow-about-page"></div>
            <div className="glow-about-page2"></div>
            <div className="glow-about-page3"></div>
            <img src={AboutPicture} alt="About Image" />
          </div>

          <div className="col-sm-6 text-start">
            <h1 style={{ fontSize: "40px" }}>Hi, I'm Carlos!</h1>
            <p className="project-desc pt-3 font-20 text-op">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              pariatur, possimus fugit eos sed vitae quia fuga dicta quaerat
              ratione provident asperiores doloremque alias maxime corporis.
              Impedit voluptas unde sapiente? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Iste nesciunt, nostrum fuga commodi
              quisquam dignissimos facere optio praesentium ipsa autem. Maiores
              debitis laboriosam suscipit nihil commodi modi deleniti
              repellendus quam.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 text-start ps-5 align-items-center d-flex">
            <p className="project-desc font-20 text-op">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              pariatur, possimus fugit eos sed vitae quia fuga dicta quaerat
              ratione provident asperiores doloremque alias maxime corporis.
              Impedit voluptas unde sapiente? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Iste nesciunt, nostrum fuga commodi
              quisquam dignissimos facere optio praesentium ipsa autem. Maiores
              debitis laboriosam suscipit nihil commodi modi deleniti
              repellendus quam.
            </p>
          </div>

          <div className="col-sm-6">
            <img src={Project1} alt="Some picture lol" />
          </div>
        </div>
      </div>
    </div>
  );
};
