// second_section
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
import Types from "../components/Types";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";
import Image from "next/image";

export default function MainFilter() {
  return (
    <>
      <div className="second_section">
        <div className="filter_container">
          <Image layout="fill" src="/filter.png" />
          <Types />
        </div>
      </div>
    </>
  );
}
