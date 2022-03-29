import image from "./../image.png";

function Result() {
  return (
    <>
      <li>
        <img src={image} alt="imagen"></img>
        <footer>
          <p>1</p>
        </footer>
      </li>
      <li>
        <img src={image} alt="imagen"></img>
        <footer>
          <p>2</p>
        </footer>
      </li>
      <li>
        <img src={image} alt="imagen"></img>
        <footer>
          <p>3</p>
        </footer>
      </li>
      <li>
        <img src={image} alt="imagen"></img>
        <footer>
          <p>4</p>
        </footer>
      </li>
    </>
  );
}

export default Result;
