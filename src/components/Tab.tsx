import React from "react";
import "./styles/Tab.css";

function Tab(props: any) {
  return (
    <div className="tab">
      <img id="tabImage" src={props.image} alt="" />
      <p className="tabname">{props.name}</p>
    </div>
  );
}

export default Tab;
