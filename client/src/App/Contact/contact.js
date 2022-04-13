import React from "react";
// import Nav from "./Nav";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Form from "../../components/Form";
// import Subtitle from "./Subtitle";

export default function Contact() {
  const contactStyle = {
    position: "relative",
    color: "#fff",
    height: "540px",
  };

  return (
    <>
      <section className="section contact" style={contactStyle}>
        <Background />
        <Title
          title="Contact"
          topPosTitle="20px"
          borderRadiusTitle="19px"
          borderTitle="#45caff 2px solid"
          widthTitle="275px"
          titleId="contact"
        />
        <Form />
        {/*
        <Nav
        // name={canine.name}
        // description={canine.description}
        // id={canine.id}
        />
        <Subtitle /> */}
      </section>
    </>
  );
}
