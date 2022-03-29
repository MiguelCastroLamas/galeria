import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Search from "./components/Search";

function App() {
  const [searchText, setSearchText] = useState("");
  const onHandleChange = (event) => {
    setSearchText(event.target.value);
    console.log("Se ejecuta el onChange del input de busqueda", searchText);
  };

  return (
    <div>
      <Search handleChange={onHandleChange} searchText={searchText}></Search>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
