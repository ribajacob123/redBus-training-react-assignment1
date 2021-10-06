import React from "react";
import "./styles/SearchboxContainer.css";
import SearchBox from "./SearchBox";

function SearchboxContainer(props: any) {
  //console.log(props)
  return (
    <div className="searchBoxContainer">
      <SearchBox
        passedFunction={props.passedFunction}
        source={props.source}
        dest={props.dest}
        setSource={props.setSource}
        setDest={props.setDest}
        flag={props.flag}
        setFlag={props.setFlag}
        setSearchTerm={props.setSearchTerm}
      />
    </div>
  );
}

export default SearchboxContainer;
