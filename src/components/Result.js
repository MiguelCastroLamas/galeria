import Image from "./Image";
import ImageFooter from "./ImageFooter";
import image from "./../image.png";

function Result({ text }) {
  return (
    <>
      <li>
        <Image image={image}></Image>
        <ImageFooter text={text}></ImageFooter>
      </li>
    </>
  );
}

export default Result;
