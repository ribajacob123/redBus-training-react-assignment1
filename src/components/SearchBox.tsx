import React from "react";
import { useState } from "react";
import getin from "./images/getin.png";
import goout from "./images/goout.png";
import calendar from "./images/calendar.png";
import swap from "./images/toggle_btn.png";
import DatePick from "./Datepicker";

function SearchBox(props: any) {
  //const [source,setSource]= useState("");
  //const [dest,setDest] = useState("");
  const [startDate, setStartDate] = useState<any | null>(null);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate()+1)

  function loadSearchPage(flag:string) {
    props.passedFunction("block");
    props.setSearchTerm("");
    props.setFlag(flag);
  }
  
  function change() {
    var temp: any = props.source;
    props.setSource(props.dest);
    props.setDest(temp);
  }

  function setDate(day:string){
    if(day==="today"){
    setStartDate(today)
    }
    else{
      setStartDate(tomorrow)
    }
  }
  function validation(){
    if(props.source ==="" || props.dest ==="" ||startDate === null){
      alert("Please fill all the fields")
      return false;
    }
    if(props.source === props.dest){
      alert("Please enter different source and destination")
      return false;
    }

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
          value={props.source}
          onClick={()=>loadSearchPage('1')}
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
          value={props.dest}
          onClick={()=>loadSearchPage('0')}
        />
      </div>
      <div className="dateDiv">
        <div className="dateSelectDiv">
          <img className="calendarImage" src={calendar} alt="" />

          <DatePick startDate={startDate} setStartDate = {setStartDate}/>
        </div>
        <div className="todayTomrw">
          <span className="todayTomrwText" onClick={()=>setDate("today")}>TODAY | </span>
          <span className="todayTomrwText" onClick={()=>setDate("tomorrow")}>TOMORROW</span>
        </div>
      </div>
      <input id="searchButton" type="button" value="SEARCH" onClick={validation} />
    </div>
  );
}

export default SearchBox;
