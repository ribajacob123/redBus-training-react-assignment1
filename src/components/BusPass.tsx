import React from "react";
import "./styles/BusPass.css";
import busPassImage from "./images/buspass.png";

function BusPass() {
  return (
    <div className="busPass">
      <div className="couponImage">
        <img id="busPassCouponImage" src={busPassImage} alt="" />
      </div>
      <div className="description">
        <div>
          <div id="introducingText">Introducing</div>
          <div id="busPassText">Bus Pass</div>
        </div>
        <div id="saveMoreText">Buy bus pass and save more</div>
        <input id="knowMoreButton" type="button" value="KNOW MORE" />
      </div>
    </div>
  );
}

export default BusPass;
