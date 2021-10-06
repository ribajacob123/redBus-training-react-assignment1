import React from "react";
import "./styles/SuggestionHeader.css";

function SuggestionHeader(props: any) {
  function changedisplay(e: any) {
    props.passedFunction("none");
  }

  return (
    <div className="suggestionHeader">
      Select Source City
      <span onClick={changedisplay} className="close">
        &times;
      </span>
    </div>
  );
}

export default SuggestionHeader;
