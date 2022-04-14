import React from "react";

export default function Nav() {
  const navStyle = {
    position: "absolute",
    top: "40px",
    left: "40px",
    fontWeight: "300",
    border: "white 2px solid",
    borderRadius: "19px",
  };

  const navItemStyle = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    padding: "10px",
    marginLeft: "7px",
    marginRight: "7px",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  };

  // const navItemGithubStyle = {
  //   display: "inline-block",
  //   position: "relative",
  //   verticalAlign: "middle",
  //   padding: "10px",
  //   marginLeft: "7px",
  //   marginRight: "7px",
  //   color: "white",
  //   backgroundImage: "url(../Assets/images/GitHub-Mark-32px.png)",
  // };

  return (
    <header className="navigation" style={navStyle}>
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
        className="item underline features js-scroll-item"
        href="#about"
        style={navItemStyle}
      >
        About
      </a>
      <a
        className="item underline github"
        href="https://github.com/alexgeis/"
        target="_blank"
        rel="noreferrer"
        style={navItemStyle}
      >
        <img
          src="../Assets/images/GitHub-Mark-32px.png"
          alt="github logo"
        ></img>
      </a>
    </header>
  );
}
