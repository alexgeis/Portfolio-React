import React from "react";
import Nav from "./Nav";
import Background from "./Background";
import Title from "./Title";

export default function Header() {
  const headerStyle = {
    position: "relative",
    color: "#fff",
    height: "890px",
  };

  return (
    <>
      <section className="section header" style={headerStyle}>
        <Background />
        <Nav
        // name={canine.name}
        // description={canine.description}
        // id={canine.id}
        />
        <Title />
      </section>
    </>
  );
}
