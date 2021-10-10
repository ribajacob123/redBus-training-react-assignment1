import React from "react";
import "./styles/SearchList.css";
import city from "./images/city.png";

function SearchList(props: any) {
  var words = props.city;
  if (props.heading === "RECENT SEARCHES") {
    words = JSON.parse(localStorage.getItem("recent") || "[]") || [];
  }
  var items = words.map((word: any, idx: any) => (
    <li key={idx} onClick={() => selected(word)}>
      <img className="cityIcon" src={city} alt="" />
      {word}
    </li>
  ));

  //console.log(props.city)
  function selected(cityName: any) {
    var listItems = JSON.parse(localStorage.getItem("recent") || "[]") || [];
    if (listItems.indexOf(cityName) === -1) {
      listItems.push(cityName);
      localStorage.setItem("recent", JSON.stringify(listItems));
    }

    props.passedFunction("none");

    if (props.flag === "1") {
      props.setSource(cityName);
    } else if (props.flag === "0") {
      props.setDest(cityName);
    }
  }
  return (
    <div className="searchList">
      
        {words.length > 0 ? <div className="searchListHeading">{props.heading}</div> : ""}
      
      <ul>{items}</ul>
    </div>
  );
}

export default SearchList;
