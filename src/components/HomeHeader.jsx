import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import person from "../images/person.png";
import msu from "../images/msuspartan.png";

export const HomeHeader = () => {
  return (
    <div className='base'>
      <div className="container py-5 mb-5">
        <div className="row white py-4 justify-content-evenly">
          <div className="col-sm-6 ps-5 py-5">
            <div className="glow-home-header"></div>
            <div className="glow-home-header2"></div>
            <div className="glow-home-header3"></div>
            <div className="glow-home-header4"></div>
            <div className="glow-home-header5"></div>
            <h2 className="text-start text-op" style={{fontSize: '40px'}}>Hi! I'm,</h2>
            <h1 className="text-start py-2 primary-text" style={{ fontSize: '64px' }}>Carlos Gutierrez</h1>
            <h1 className="text-start py-2" style={{fontSize: '48px'}}>Software Developer</h1>                          
              <h3 className="text-start pt-3 text-op" style={{fontSize: '32px'}}>
                Computer Science at Michigan State
              </h3>
          </div>
          <div className="col-sm-5 align-content-center position-relative">
            <div className="circle"></div>
            <img src={person} alt="My Image" className="header-home-picture" />
          </div>
        </div>
      </div>
    </div>
  );
};
