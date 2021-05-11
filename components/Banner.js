import Image from "next/image";
import ImageGallery from "react-image-gallery";

export default function Banner({ img, images }) {
  let display;
  if (img && img[0] === "/") {
    display = <Image id="banner" layout="fill" src={img} />;
  } else if (img) {
    display = (
      <div
        style={{
          display: "block",
          overflow: "hidden",
          position: "absolute",
          inset: "0px",
        }}
      >
        <img id="banner" src={img} style={{ width: "100%", height: "100%" }} />
      </div>
    );
  }
  if (images) {
    display = (
      <div className="gallery">
        <ImageGallery items={images} />
      </div>
    );
  }
  return <>{display}</>;
}
