import React from "react";
import "./styles/Input.css";
import search from "./images/searchicon.png";

function Input(props: any) {
  const getSearchTerm = (event: any) => {
    props.searchKeyword(event.target.value);
  };
  return (
    <div className="input">
      <img className="search-icon" src={search} alt="" />
      <input
        placeholder="Enter Area , City Name"
        id="suggestInput"
        value={props.searchTerm}
        onChange={getSearchTerm}
      />
    </div>
  );
}

export default Input;
