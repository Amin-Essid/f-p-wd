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
    title: "Célula 4x4",
    type: "cell4x4",
    image: "/type_cell.png",
  },
  {
    title: "Camper",
    type: "camper",
    image: "/type_camper.png",
  },
  {
    title: "Perfilada",
    type: "perfilada",
    image: "/type_perfilada.png",
  },
  {
    title: "Capuchina",
    type: "capuchina",
    image: "/type_capuchina.png",
  },
  {
    title: "Integral",
    type: "integral",
    image: "/type_integral.png",
  },
];

export default function Types({ type, setType }) {
  return (
    <>
      <div className="types">
        {types.map((t, i) => {
          if (type === t.type) {
            return (
              <div
                onClick={() => setType(t.type)}
                key={i}
                className="type selected_type"
              >
                <Image src={t.image} width={180} height={100} />
                <h2>{t.title}</h2>
              </div>
            );
          } else {
            return (
              <div onClick={() => setType(t.type)} key={i} className="type ">
                <Image src={t.image} width={180} height={100} />
                <h2>{t.type}</h2>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
