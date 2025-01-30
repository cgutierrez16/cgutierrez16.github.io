import React from "react";
import nodejs from "../images/nodejs.png";
import react from "../images/React.png";
import python from "../images/Python.png";
import cplus from "../images/C++.png";

/*
  THIS WAS A FEATURE AT ONE POINT IN TIME THAT I LATER DECIDED NOT TO 
  INCLUDE IN THE FINAL PRODUCT
*/

export const SkillsBar = () => {
  return (
    <div className="color-2">
      <div className="container py-4">
        <div className="row">
          <div className="col-sm-3 align-items-center d-flex">
            <img src={nodejs} alt="Node.Js Logo" className="text-logo px-4" />
            <h2>Node.Js</h2>
          </div>
          <div className="col-sm-3 align-items-center d-flex">
            <img src={react} alt="Node.Js Logo" className="text-logo px-4" />
            <h2>React JS</h2>
          </div>
          <div className="col-sm-3 align-items-center d-flex">
            <img src={python} alt="Node.Js Logo" className="text-logo px-4" />
            <h2>Python</h2>
          </div>
          <div className="col-sm-3 align-items-center d-flex">
            <img src={cplus} alt="Node.Js Logo" className="text-logo px-4" />
            <h2>C++</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
