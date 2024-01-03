import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("Dark Mode");

  const [mystyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  function inputarea(e) {
    setText(e.target.value);
  }

  function CapitalLetter() {
    let capital = text.toUpperCase();
    setText(capital);
    props.showAlert("Enable to UpperCase", "success");
  }

  const smallLetter = () => {
    let small = text.toLowerCase();
    setText(small);
    props.showAlert("Enable to SmallLetter", "success");
  };

  const clear = () => {
    let clear = " ";
    setText(clear);
    props.showAlert("Clear to textBox", "success");
  };
  const copytext = () => {
    let text = document.getElementById("Textarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges() // selected element remove it
    props.showAlert("Copied to Textbox", "success");
  };
  const space = () => {
    let extraspace = text.split(/[ ]+/);
    setText(extraspace.join(" "));
    props.showAlert("Remove to ExtraSpace", "success");
  };

  const DarkMode = () => {
    if (mystyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setMode("Light Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setMode("Dark Mode");
    }
  };

  return (
    <div
      className="container"
      style={{
        ...mystyle,
        backgroundColor: props.mode === "dark" ? "#000000" : "white",
        color: props.mode === "dark" ? "white" : "#000000",
      }}
    >
      <div className="mb-3 my-3">
        <label
          forHtml="exampleFormControlTextarea1"
          className="form-label fs-1 fw-semibold "
        >
          Try textUtils - word Counter, Character Counter, Remove extra spaces
        </label>
        <textarea
          style={{
            ...mystyle,
            backgroundColor: props.mode === "dark" ? "#000000" : "white",
            color: props.mode === "dark" ? "white" : "#000000",
          }}
          className="form-control py-4 my-4 fs-2"
          id="Textarea1"
          rows="3"
          onChange={inputarea}
          value={text}
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary fs-4 my-3"
          onClick={CapitalLetter}
          disabled={text.length === 0}
        >
          CapitalText
        </button>
        <button
          type="button"
          className="btn btn-primary fs-4 my-3 mx-3"
          onClick={smallLetter}
          disabled={text.length === 0}
        >
          Small Text
        </button>
        <button
          type="button"
          className="btn btn-primary fs-4 my-3 mx-2"
          onClick={clear}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary fs-4 my-3 mx-2"
          onClick={copytext}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary fs-4 my-3 mx-2"
          onClick={space}
          disabled={text.length === 0}
        >
          Remove Extra Text
        </button>
        <button
          type="button"
          className="btn btn-primary fs-4 my-3 mx-2"
          onClick={DarkMode}
          disabled={text.length === 0}
        >
          {mode}
        </button>
      </div>

      <div>
        <h1> Your text Summary</h1>
        <p className="fs-4">
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          word and {text.length} character
        </p>
      </div>
      <div>
        <h2 className="fs-1 fw-medium">Preview</h2>
        <p className="fs-3">
          {text.length > 0
            ? text
            : "Enter the textbox above to the preview it here"}
        </p>
      </div>
    </div>
  );
};

export default TextForm;
