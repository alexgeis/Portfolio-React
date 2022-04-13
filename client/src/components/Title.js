import React from "react";

export default function Title(props) {
  const titleStyle = {
    position: "absolute",
    // top: "150px",
    top: props.topPosTitle,
    left: "0",
    right: "0",
    // paddingLeft: "20px",
    // paddingRight: "20px",
    textAlign: "center",
    border: props.borderTitle,
    borderRadius: props.borderRadiusTitle,
    marginLeft: "auto",
    marginRight: "auto",
    width: props.widthTitle,
    background: props.backgroundTitle,
  };

  // const titleBgStyle = {
  //   display: "inline-block",
  //   position: "relative",
  //   verticalAlign: "middle",
  //   padding: "10px",
  //   marginLeft: "7px",
  //   marginRight: "7px",
  // };

  const titleWordStyle = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    padding: "10px",
    marginLeft: "7px",
    marginRight: "7px",
    fontSize: "60px",
    textAlign: "center",
    lineHeight: "1.5em",
    color: props.textColor,
  };
  // const titleAvatarStyle = {
  //   display: "inline-block",
  //   position: "relative",
  //   verticalAlign: "middle",
  //   padding: "10px",
  //   marginLeft: "7px",
  //   marginRight: "7px",
  // };
  return (
    <h1 className="title" style={titleStyle}>
      {/* <span className="titleBg" style={titleBgStyle}></span> */}
      <span className="title" style={titleWordStyle} id={props.titleId}>
        {props.title}
      </span>
      {/* <span className="avatar" style={titleAvatarStyle}></span> */}
    </h1>
  );
}
