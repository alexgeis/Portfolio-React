import React from "react";
// import Background from "./Background";
import Title from "../../components/Title";
import Photo from "../../components/Photo";
// import Subtitle from "./Subtitle";

export default function About() {
  return (
    <>
      <section className="section about aboutStyle">
        <Title title="About" titleId="aboutTitle" />
        <Photo />
      </section>
    </>
  );
}
