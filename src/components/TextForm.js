import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container text-center my-4">
        <h1 style={{ color: props.theme === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.theme === "light" ? "#F6F6F6" : "#292929",
            color: props.theme === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <div className="mx-0">
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleUpClick}
          // style={{
          //   backgroundColor: props.theme === "light" ? "#0D6EFD" : "#BB86FC",
          //   color: props.theme === "light" ? "white" : "black",
          //   border: "#BB86FC",
          //   padding:'10px'
          // }}
        >
          Convert to UPPPER CASE
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleSpace}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <p style={{ color: props.theme === "light" ? "black" : "white" }}>
        Words : {text.split(" ").length} and Characters : {text.length}
      </p>
      <div style={{ color: props.theme === "light" ? "black" : "white" }}>
        <h4>Your preview :</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
