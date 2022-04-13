import React from "react";

export default function Background() {
  const backgroundStyle = {
    position: "absolute",
    top: "-10vh",
    left: "0",
    width: "100%",
    height: "calc(100% + 10vh)",
    background: "linear-gradient(135deg,#ff1b6b,#45caff)",
    transform: "skewY(-5deg)",
    boxShadow: "0 0 50px rgb(60 117 162 / 40%)",
    zIndex: "-1",
    // margin: "0 0 0 0",
  };

  return (
    <>
      <div className="section background" style={backgroundStyle}></div>
    </>
  );
}
