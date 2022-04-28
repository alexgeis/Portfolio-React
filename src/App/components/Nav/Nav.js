import React from "react";
import GitHubLogo from "../../../Assets/images/GitHub-Mark-32px.png";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <header className="navigation navStyle">
        <a className="item underline navItemStyle" href="#work">
          Work
        </a>
        <a className="item underline navItemStyle" href="#contact">
          Contact
        </a>
        <a className="item underline navItemStyle" href="#about">
          About
        </a>
        <a
          className="item underline github navItemStyle"
          href="https://github.com/alexgeis/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHubLogo} alt="github logo"></img>
        </a>
      </header>
    </>
  );
}
