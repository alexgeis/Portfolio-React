import React from "react";
// import Background from "./Background";
import Title from "../../components/Title/Title";
import Photo from "../../components/Photo/Photo";
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
