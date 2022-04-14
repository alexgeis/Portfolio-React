import React from "react";

export default function Footer() {
  const footerStyle = {
    position: "absolute",
    // bottom: "40px",
    right: "40px",
    // width: "100%",
    height: "40px",
    footer: "linear-gradient(135deg,#ff1b6b,#45caff)",
    // transform: "skewY(-5deg)",
    // boxShadow: "0 0 50px rgb(60 117 162 / 40%)",
    // margin: "0 0 0 0",
  };

  return (
    <>
      <footer className="footer" style={footerStyle}>
        <h4 style={{ color: "black" }}>Made with ❤️️ by Alex</h4>
      </footer>
    </>
  );
}
