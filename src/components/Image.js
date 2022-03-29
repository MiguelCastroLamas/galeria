function Image({ image, nombre = "Not found" }) {
  return (
    <>
      <img src={image} alt={nombre}></img>
    </>
  );
}

export default Image;
