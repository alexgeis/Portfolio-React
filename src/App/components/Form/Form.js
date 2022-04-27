import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // conditional statement that will call either setFullName, setEmail or setMessage based on what field the user is typing in
    if (name === "fullName") setFullName(value);
    else if (name === "email") setEmail(value);
    else setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Alert the user their full name, clear the inputs
    alert(`Hello ${fullName}`);
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="formDivStyle">
      {/* TERNARY - if no name show message, if name show name */}
      <p style={{ textAlign: "center" }}>
        Hey there friend, let's get in touch
      </p>

      <form className="form formStyle">
        <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="Full Name"
          className="inputStyle"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your email here..."
          className="inputStyle"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="Your message here..."
          className="inputStyle"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
