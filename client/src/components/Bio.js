import React from "react";

export default function Bio() {
  const bioStyle = {
    position: "absolute",
    top: "300px",
    maxWidth: "50%",
    maxHeight: "40%",
    background: "rgba(0,0,0,.6)",
    padding: "5px",
  };

  return (
    <>
      <div style={bioStyle}>
        <p>Hey there - I'm Alex ~</p>
        <p>
          I'm a full-stack developer with a passion for music, books, and oxford
          commas
        </p>
        <p>Check out my projects above or get in touch with me below</p>
      </div>
    </>
  );
}
