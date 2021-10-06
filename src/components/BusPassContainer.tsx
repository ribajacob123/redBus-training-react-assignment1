import React from "react";
import "./styles/BusPassContainer.css";
import BusPass from "./BusPass";

function BusPassContainer() {
  return (
    <div>
      <div className="introducing">INTRODUCING</div>
      <div className="busPassContainer">
        <BusPass />
      </div>
    </div>
  );
}

export default BusPassContainer;
