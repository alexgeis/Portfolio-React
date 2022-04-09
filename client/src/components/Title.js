import React from "react";

export default function Title() {
  const titleStyle = {
    position: "absolute",
    top: "190px",
    left: "50%",
  };

  const titleBgStyle = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    padding: "10px",
    marginLeft: "7px",
    marginRight: "7px",
  };

  const titleWordStyle = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    padding: "10px",
    marginLeft: "7px",
    marginRight: "7px",
  };
  const titleAvatarStyle = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    padding: "10px",
    marginLeft: "7px",
    marginRight: "7px",
  };
  return (
    <h1 className="title" style={titleStyle}>
      <span className="background" style={titleBgStyle}></span>
      <span className="title" style={titleWordStyle}>
        Alex Geis
      </span>
      <span className="avatar" style={titleAvatarStyle}></span>
    </h1>
  );
}
