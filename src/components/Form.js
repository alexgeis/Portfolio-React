import React, { useState } from "react";
// import "./style.css";

function Form() {
  const formStyle = {
    // position: "absolute",
    // top: "180px",
    // left: "44.2%",
    margin: "0 auto",
    width: "30%",
    zIndex: "1",
  };
  const formDivStyle = {
    position: "relative",
    top: "180px",
    // left: "44.2%",
    margin: "20px",
    index: "1",
  };
  const inputStyle = {
    display: "block",
    marginTop: "5px",
    marginBottom: "5px",
    width: "100%",
  };
  // Here we set two state variables for firstName and lastName using `useState`
  // 1st variable in array = name of state variable
  // 2nd = update method for state change
  // useState(x)    -    x = initial value
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFullName or setMessage based on what field the user is typing in
    return name === "fullName" ? setFullName(value) : setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${fullName} ${message}`);
    setFullName("");
    setMessage("");
  };

  return (
    <div style={formDivStyle}>
      {/* TERNARY - if no name show message, if name show name */}
      <p style={{ textAlign: "center" }}>
        Hey there friend, let's get in touch
      </p>

      <form className="form" style={formStyle}>
        <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="Full Name"
          style={inputStyle}
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="Your message here..."
          style={inputStyle}
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
