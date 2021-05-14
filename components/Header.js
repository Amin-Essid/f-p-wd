import Banner from "../components/Banner";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";
import Image from "next/image";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Header({ banner, images }) {
  let display;
  if (banner) {
    display = <Banner img={banner} />;
  } else if (images) {
    display = <Banner images={images} />;
  }
  return (
    <>
      <div className="header">
        <div className="top_shape"></div>
        <Image
          width={495}
          height={324}
          className="rectangle"
          src="/corner.png"
        />
        <div className="navbar">
          <Nav />
        </div>
        <div className="logo" style={{ cursor: "pointer" }}>
          <Link href="/">
            <Image width={301} height={363} src="/logo.png" />
          </Link>
        </div>
        <div className="hero">{display}</div>
      </div>
    </>
  );
}
