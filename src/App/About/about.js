import React from "react";
// import Background from "./Background";
import Title from "../../components/Title";
import Photo from "../../components/Photo";
// import Subtitle from "./Subtitle";

export default function About() {
  return (
    <>
      <section className="section about aboutStyle">
        <Title
          title="About"
          topPosTitle="50px"
          borderRadiusTitle="19px"
          borderTitle="#45caff 2px solid"
          widthTitle="275px"
          backgroundTitle="linear-gradient(200deg,#45caff,#ff1b6b)"
          titleId="about"
        />
        <Photo />
      </section>
    </>
  );
}
