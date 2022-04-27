import React from "react";
import "./Subtitle.css";

export default function Subtitle(props) {
  return (
    <>
      <h2 className="subTitle subTitleStyle">{props.subTitle}</h2>
    </>
  );
}
