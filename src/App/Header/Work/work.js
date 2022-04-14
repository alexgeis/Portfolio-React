import React from "react";
// import Title from "./Title";
import Subtitle from "../../../components/Subtitle";
import WorkCarousel from "../../../components/Carousel";
import WorkCard from "../../../components/Card";

export default function Work() {
  const workStyle = {
    position: "absolute",
    top: "300px",
    color: "#fff",
    height: "480px",
  };

  return (
    <>
      <section className="section work" style={workStyle}>
        {/* <WorkCarousel /> */}
        <WorkCard />
        <Subtitle subTitle="Work" topPosSubTitle="80vh" />
      </section>
    </>
  );
}
