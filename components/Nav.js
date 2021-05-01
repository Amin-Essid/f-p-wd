// second_section
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";
import Image from "next/image";

let types = [
  {
    type: "ALQUILER",
    link: "/",
  },
  {
    type: "VENTA",
    link: "/",
  },
  {
    type: "CAMPERIZACION",
    link: "/",
  },
  {
    type: "4x4",
    link: "/",
  },
  {
    type: "CONTACTO",
    link: "/",
  },
];

export default function Nav() {
  return (
    <>
      <div className="nav">
        {types.map((type, i) => (
          <div key={i} className="nav_item">
            <Link href={type.link}>
              <h2>{type.type}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
