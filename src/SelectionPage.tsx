import React from "react";
import SuggestionHeader from "./components/SuggestionHeader";
import Input from "./components/Input";
import SearchList from "./components/SearchList";
import "./SelectionPage.css";

function SelectionPage(props: any) {
  //const [searchTerm,setSearchTerm] = useState("")
  //const [searchResults,setSearchResults] = useState([])
  const city: any = [
    "Bengaluru",
    "Chennai",
    "Coimbatore",
    "Hyderabad",
    "Pune",
    "Delhi",
    "Mumbai",
  ];
  const searchHandler = (searchTerm: any) => {
    props.setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newList: any = city.filter((cit: any) => {
        return cit.toLowerCase().includes(searchTerm.toLowerCase());
      });
      props.setSearchResults(newList);
    } else {
      props.setSearchResults(city);
    }
  };
  return (
    <div
      style={{ display: props.display }}
      className="selectionPage"
      id="selectionPage"
    >
      <SuggestionHeader passedFunction={props.passedFunction} />
      <Input searchTerm={props.searchTerm} searchKeyword={searchHandler} />
      <SearchList
        heading="RECENT SEARCHES"
        passedFunction={props.passedFunction}
        changeInput={props.changeInput}
        source={props.source}
        dest={props.dest}
        setSource={props.setSource}
        setDest={props.setDest}
        flag={props.flag}
        setFlag={props.setFlag}
        city={props.searchTerm.length < 1 ? city : props.searchResults}
      />
      <SearchList
        heading="POPULAR SEARCHES"
        passedFunction={props.passedFunction}
        changeInput={props.changeInput}
        source={props.source}
        dest={props.dest}
        setSource={props.setSource}
        setDest={props.setDest}
        flag={props.flag}
        setFlag={props.setFlag}
        city={props.searchTerm.length < 1 ? city : props.searchResults}
      />
    </div>
  );
}

export default SelectionPage;
