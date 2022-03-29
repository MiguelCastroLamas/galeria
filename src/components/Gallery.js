import Result from "./Result";

function Gallery({ results }) {
  return (
    <div className="gallery">
      <ul>
        {results.map((text) => (
          <Result key={text} text={text}></Result>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
