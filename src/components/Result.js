import Image from "./Image";
import ImageFooter from "./ImageFooter";
import image from "./../image.png";

function Result() {
  return (
    <>
      <li>
        <Image image={image}></Image>
        <ImageFooter text="Primera imagen"></ImageFooter>
      </li>
      <li>
        <Image image={image}></Image>
        <ImageFooter text="Segunda imagen"></ImageFooter>
      </li>
      <li>
        <Image image={image}></Image>
        <ImageFooter text="Tercera imagen"></ImageFooter>
      </li>
      <li>
        <Image image={image}></Image>
        <ImageFooter text="Cuarta imagen"></ImageFooter>
      </li>
    </>
  );
}

export default Result;
