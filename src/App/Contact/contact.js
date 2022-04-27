import React from "react";
// import Nav from "./Nav";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Form from "../../components/Form";
// import Subtitle from "./Subtitle";

export default function Contact() {
  return (
    <>
      <section className="section contact contactStyle">
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
      </section>
    </>
  );
}
