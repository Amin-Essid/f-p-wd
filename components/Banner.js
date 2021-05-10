import Image from "next/image";
export default function Banner({ img }) {
  let display;
  if (img[0] === "/") {
    display = <Image id="banner" layout="fill" src={img} />;
  } else {
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
  return <>{display}</>;
}
