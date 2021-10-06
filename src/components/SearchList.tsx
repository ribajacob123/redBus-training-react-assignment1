import React from "react";
import "./styles/SearchList.css";
import city from "./images/city.png";

function SearchList(props: any) {
  const words = props.city;
  const items = words.map((word: any, idx: any) => (
    <li id={word} key={idx} onClick={selected}>
      <img className="cityIcon" src={city} alt="" />
      {word}
    </li>
  ));
  //console.log(props.city)
  function selected(val: any) {
    props.passedFunction("none");
    if (props.flag === "1") {
      props.setSource(val.target.id);
    } else if (props.flag === "0") {
      props.setDest(val.target.id);
    }
  }
  return (
    <div className="searchList">
      <div className="searchListHeading">{props.heading}</div>
      <ul>{items}</ul>
    </div>
  );
}

export default SearchList;
