import Banner from "../components/Banner";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";
import Image from "next/image";
import Nav from "../components/Nav";

export default function Header({ banner }) {
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
        <div className="logo">
          <Image width={301} height={363} src="/logo.png" />
        </div>
        <div className="hero">
          <Banner img={banner} />
        </div>
      </div>
    </>
  );
}
