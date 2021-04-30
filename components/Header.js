import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";
import Image from "next/image";
import Nav from "../components/Nav";

export default function Header() {
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
          <Image layout="fill" src="/hero.png" />
        </div>
      </div>
    </>
  );
}
