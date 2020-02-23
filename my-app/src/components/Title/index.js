import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title-container">
      <h1 className="title">{props.children}</h1>
      <h2 className="title-text">Click an Image to Begin</h2>
      <h2 className="title-text">Score: {props.currentScore} | Top Score: {props.topScore}</h2>
    </div>
  );

}

export default Title;
