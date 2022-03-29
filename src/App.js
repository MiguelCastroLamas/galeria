import "./App.css";
import Gallery from "./components/Gallery";
import Search from "./components/Search";

function App() {
  const onClickHandler = () => {
    console.log("Se ha hecho click en el input del buscador");
  };

  return (
    <div>
      <Search clickHandler={onClickHandler}></Search>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
