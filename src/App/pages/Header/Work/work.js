import React, { useState, useEffect } from "react";
// import Title from "./Title";
// import Subtitle from "../../../components/Subtitle";
// import WorkCarousel from "../../../components/Carousel";
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

  return (
    <>
      {matches && (
        <section className="section work workBigStyle">
          {/* <WorkCarousel /> */}
          <WorkCard />
          {/* <Subtitle subTitle="Work" id="workSubtitle" /> */}
        </section>
      )}
      {!matches && (
        <section className="section work workSmallStyle">
          {/* <WorkCarousel /> */}
          <WorkCard />
          {/* <Subtitle subTitle="Work" id="workSubtitle" /> */}
        </section>
      )}
    </>
  );
}
