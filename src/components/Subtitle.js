import React from "react";

export default function Subtitle(props) {
  const subTitleStyle = {
    position: "absolute",
    top: props.topPosSubTitle,
    left: "0",
    right: "0",
    paddingLeft: "20px",
    paddingRight: "20px",
    textAlign: "center",
    lineHeight: "1.5em",
    fontSize: "25px",
    fontWeight: "300",
    color: props.textColor,
  };

  return (
    <>
      <h2 className="subTitle" style={subTitleStyle}>
        {props.subTitle}
      </h2>
    </>
  );
}
