import React from "react";

export default function Background() {
  const backgroundStyle = {
    position: "absolute",
    top: "-10vh",
    left: "0",
    width: "100%",
    height: "calc(100% + 10vh)",
    background: "linear-gradient(135deg,#330867,#31a7bb)",
    transform: "skewY(-5deg)",
    boxShadow: "0 0 50px rgb(60 117 162 / 40%)",
    margin: "0 0 0 0",
  };

  return (
    <>
      <div className="section header" style={backgroundStyle}></div>
    </>
  );
}
