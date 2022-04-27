import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import Background from "../../components/Background/Background";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
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

  return (
    <>
      {matches && (
        <section className="section header headerBigStyle">
          <Background />
          <Nav />
          <Title title="Alex Geis" titleId="headerTitleMatch" />
          <Subtitle subTitle="Full-Stack Developer" id="headerSubtitleMatch" />
          <Work />
        </section>
      )}
      {!matches && (
        <section className="section header headerSmallStyle">
          {/* <Background /> */}
          <Nav />
          <Title title="Alex Geis" titleId="headerTitleNoMatch" />
          <Subtitle
            subTitle="Full-Stack Developer"
            id="headerSubtitleNoMatch"
          />
          <Work />
        </section>
      )}
    </>
  );
}
