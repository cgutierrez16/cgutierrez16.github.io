import React from "react";
import person from "../images/homeaboutperson.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const HomeAbout = () => {
  return (
    <div className="base pb-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-5">
            <img src={person} alt="Home About Headshot" />
          </div>

          <div className="col-sm-7">
            <h1 className="white text-start pb-4" style={{ fontSize: "70px" }}>
              About Me
            </h1>
            <p
              className="project-desc white text-start pb-5 text-op"
              style={{ fontSize: "18px" }}
            >
              Hey there, my name is Carlos Gutierrez and I am currently a junior
              at Michigan State studying Computer Science. Creating has always
              been a passion of mine, whether that be physical or digital, and
              is largely what got me into programming. I love being able to
              build things that can make a difference in the world and for
              people to use. I've been learning and refining my skills over many
              years and am eager to apply them in a professional setting.
            </p>

            <div className="d-flex justify-content-start">
              <Link to="/about">
                <button className="keepreading-btn primary">
                  Keep Reading <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
