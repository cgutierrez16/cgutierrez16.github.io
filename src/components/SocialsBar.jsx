import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedinblack.webp";
import resume from "../images/resume.png";
import resumePdfUrl from '../Resume.pdf'

export const SocialsBar = () => {
  return (
    <div className="base py-4">
      <div className="container social-container">
        <div className="row">
          <div className="col">
            <a
              href="https://github.com/cgutierrez16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary social-btn px-4">
                <img src={github} alt="Github Logo" className="social-img pe-3 pb-1" />
                GitHub
              </button>
            </a>
          </div>

          <div className="col">
            <a
              href="https://linkedin.com/in/carlos-gutierrez-software"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary social-btn px-4">
                <img src={linkedin} alt="Linkedin Logo" className="linkedin pe-3 pb-1" />
                LinkedIn
              </button>
            </a>
          </div>

          <div className="col">
            <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
              <button className="primary social-btn px-4">
                <img src={resume} alt="Resume Logo" className="social-img pe-3 pb-1" />
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
