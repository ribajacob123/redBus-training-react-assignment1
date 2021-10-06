import React from "react";
//import { useState } from "react";
import "./styles/SearchBox.css";
import getin from "./images/getin.png";
import goout from "./images/goout.png";
import calendar from "./images/calendar.png";
import swap from "./images/toggle_btn.png";
import DatePick from "./Datepicker";

function SearchBox(props: any) {
  //const [source,setSource]= useState("");
  //const [dest,setDest] = useState("");

  function loadSearchPagesource(e: any) {
    props.passedFunction("block");
    props.setSource(props.source);
    props.setFlag("1");
    props.setSearchTerm("");
  }
  function loadSearchPagedest(e: any) {
    props.passedFunction("block");
    props.setDest(props.dest);
    props.setFlag("0");
    props.setSearchTerm("");
  }
  function sourcechange(val: any) {
    props.setSource(val.target.value);
  }
  function destchange(val: any) {
    props.setDest(val.target.value);
  }
  function change(event: any) {
    var temp: any = props.source;
    props.setSource(props.dest);
    props.setDest(temp);
  }
  return (
    <div className="searchBox">
      <div className="source">
        <img className="sourceDestinationImages" src={getin} alt="" />
        <input
          className="inputTab"
          type="text"
          id="sourceInput"
          placeholder="ENTER SOURCE"
          onChange={sourcechange}
          value={props.source}
          onClick={loadSearchPagesource}
        />
        <button className="changeButton">
          <img onClick={change} className="swapIcon" src={swap} alt="" />
        </button>
      </div>

      <div className="destination">
        <img className="sourceDestinationImages" src={goout} alt="" />
        <input
          className="inputTab"
          type="text"
          id="destinationInput"
          placeholder="ENTER DESTINATION"
          onChange={destchange}
          value={props.dest}
          onClick={loadSearchPagedest}
        />
      </div>
      <div className="dateDiv">
        <div className="dateSelectDiv">
          <img className="calendarImage" src={calendar} alt="" />

          <DatePick />
        </div>
        <div className="todayTomrw">
          <span className="todayTomrwText">TODAY | </span>
          <span className="todayTomrwText">TOMORROW</span>
        </div>
      </div>
      <input id="searchButton" type="button" value="SEARCH" />
    </div>
  );
}

export default SearchBox;
