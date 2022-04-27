import React from "react";

export default function Title(props) {
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
    <h1 className="title titleStyle">
      {/* <span className="titleBg titleBgStyle"></span> */}
      <span className="title titleWordStyle" id={props.titleId}>
        {props.title}
      </span>
      {/* <span className="avatar titleAvatarStyle"></span> */}
    </h1>
  );
}
