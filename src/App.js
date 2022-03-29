import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Search from "./components/Search";

const imageTexts = [
  "Primera imagen",
  "Segunda imagen",
  "Tercera imagen",
  "Cuarta imagen",
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onHandleChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const results = imageTexts.filter(
      (text) =>
        searchText.trim() === "" || text.toLowerCase().includes(searchText)
    );
    setSearchResults(results);
  }, [searchText]);

  return (
    <div>
      <Search handleChange={onHandleChange} searchText={searchText}></Search>
      <Gallery results={searchResults}></Gallery>
    </div>
  );
}

export default App;
