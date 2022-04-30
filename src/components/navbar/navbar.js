import React from "react";
import "./navbarStyles.css";

function Navbar() {
  return (
    <div className="grandMenu">
      <div className="menuParent"></div>
      <div className="menu">
        <a href="#about">
          <h1>Experience</h1>
        </a>

        <a href="#portfolio">
          <h1>Projects</h1>
        </a>

        <a href="#skills">
          <h1>Skills</h1>
        </a>

        <a href="#resume">
          <h1>Education</h1>
        </a>

        {/* <a href="http://bit.ly/rampukarresume">
          <h1>Resume</h1>
        </a> */}
      </div>
    </div>
  );
}

export default Navbar;
