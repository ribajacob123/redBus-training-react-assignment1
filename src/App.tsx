import React from "react";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchboxContainer from "./components/SearchboxContainer";
import BusPassContainer from "./components/BusPassContainer";
import Bottom from "./components/Bottom";
import SelectionPage from "./SelectionPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [display, setDisplay] = useState("none");
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [flag, setFlag] = useState("-1");

  function passedFunction(key: string) {
    setDisplay(key);
  }

  return (
    <div className="App">
      <SelectionPage
        display={display}
        passedFunction={passedFunction}
        source={source}
        dest={dest}
        setSource={setSource}
        setDest={setDest}
        flag={flag}
        setFlag={setFlag}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <Navbar />
      <SearchboxContainer
        passedFunction={passedFunction}
        source={source}
        dest={dest}
        setSource={setSource}
        setDest={setDest}
        flag={flag}
        setFlag={setFlag}
        setSearchTerm={setSearchTerm}
      />
      <BusPassContainer />
      <Bottom />
    </div>
  );
}

export default App;
