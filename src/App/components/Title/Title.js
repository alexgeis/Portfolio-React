import React from "react";
import "./Title.css";

export default function Title(props) {
  // const titleBgStyle = {
  //   display: "inline-block",
  //   position: "relative",
  //   verticalAlign: "middle",
  //   padding: "10px",
  //   marginLeft: "7px",
  //   marginRight: "7px",
  // };

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
