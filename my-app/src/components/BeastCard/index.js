import React from "react";
import "./style.css";

function BeastCard(props) {
  return (
    <div className="beast-card">
      
        <img alt={props.name} src={props.image} />

    </div>
  );
}
// handleClick = event => {
//   const { nam}
// }

export default BeastCard;
