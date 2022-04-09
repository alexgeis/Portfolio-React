import React from "react";

export default function Nav() {
  const navStyle = {
    position: "absolute",
    top: "24px",
    left: "65px",
    fontWeight: "300",
  };

  const navItemStyle = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    padding: "10px",
    marginLeft: "7px",
    marginRight: "7px",
    color: "white",
  };

  return (
    <header className="navigation" style={navStyle}>
      <a
        className="item underline features js-scroll-item"
        href="#about"
        style={navItemStyle}
      >
        About
      </a>
      <a
        className="item underline get-started js-scroll-item"
        href="#work"
        style={navItemStyle}
      >
        Work
      </a>
      <a
        className="item underline whos-using-it js-scroll-item"
        href="#contact"
        style={navItemStyle}
      >
        Contact
      </a>
      <a
        className="item underline github"
        href="https://github.com/alexgeis/"
        target="_blank"
        style={navItemStyle}
      >
        Github
      </a>
    </header>
  );
}
