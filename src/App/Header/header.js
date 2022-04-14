import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Work from "./Work/work";

export default function Header() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 2500px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 2500px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const headerBigStyle = {
    position: "relative",
    color: "#fff",
    height: "100vh",
  };
  const headerSmallStyle = {
    position: "relative",
    background: "linear-gradient(135deg,#ff1b6b,#45caff)",
    height: "2000px",
  };

  return (
    <>
      {matches && (
        <section className="section header" style={headerBigStyle}>
          <Background />
          <Nav
          // name={canine.name}
          // description={canine.description}
          // id={canine.id}
          />
          <Title title="Alex Geis" topPosTitle="150px" />
          <Subtitle subTitle="Full-Stack Developer" topPosSubTitle="240px" />
          <Work />
        </section>
      )}
      {!matches && (
        <section className="section header" style={headerSmallStyle}>
          {/* <Background /> */}
          <Nav />
          <Title title="Alex Geis" topPosTitle="150px" textColor="white" />
          <Subtitle
            subTitle="Full-Stack Developer"
            topPosSubTitle="240px"
            textColor="white"
          />
          <Work />
        </section>
      )}
    </>
  );
}
