import React, { useState, useEffect } from "react";
// import Title from "./Title";
import Subtitle from "../../../components/Subtitle";
import WorkCarousel from "../../../components/Carousel";
import WorkCard from "../../../components/Card";

export default function Work() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1100px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1100px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const workBigStyle = {
    position: "absolute",
    top: "300px",
    left: "10%",
    color: "#fff",
    height: "680px",
  };
  const workSmallStyle = {
    position: "absolute",
    top: "300px",
    color: "#fff",
    height: "680px",
  };

  return (
    <>
      {matches && (
        <section className="section work" style={workBigStyle}>
          {/* <WorkCarousel /> */}
          <WorkCard />
          {/* <Subtitle subTitle="Work" topPosSubTitle="800px" /> */}
        </section>
      )}
      {!matches && (
        <section className="section work" style={workSmallStyle}>
          {/* <WorkCarousel /> */}
          <WorkCard />
          {/* <Subtitle subTitle="Work" topPosSubTitle="800px" /> */}
        </section>
      )}
    </>
  );
}
