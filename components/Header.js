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
        <Banner img={banner} />
        <div className="navbar">
          <Nav />
        </div>
        <div className="logo">
          <Image width={301} height={363} src="/logo.png" />
        </div>
        <div className="hero">
          <Image id="banner" layout="fill" src="/hero.png" />
        </div>
      </div>
    </>
  );
}
