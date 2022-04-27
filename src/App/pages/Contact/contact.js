import React from "react";
// import Nav from "./Nav";
import Background from "../../components/Background/Background";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
// import Subtitle from "./Subtitle";

export default function Contact() {
  return (
    <>
      <section className="section contact contactStyle">
        <Background />
        <Title title="Contact" titleId="contactTitle" />
        <Form />
      </section>
    </>
  );
}
