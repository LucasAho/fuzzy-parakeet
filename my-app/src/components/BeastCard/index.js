import React  from "react";
import "./style.css";

function BeastCard(props) {

    return(
      <button className="beast-card" onClick={props.handleClick}>
        <img alt={props.name} src={props.image} />
      </button>
    );
  }

export default BeastCard;
