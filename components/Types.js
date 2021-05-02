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
    type: "Célula 4x4",
    image: "/type_cell.png",
  },
  {
    type: "Camper",
    image: "/type_camper.png",
  },
  {
    type: "Perfilada",
    image: "/type_perfilada.png",
  },
  {
    type: "Capuchina",
    image: "/type_capuchina.png",
  },
  {
    type: "Integral",
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
                <h2>{t.type}</h2>
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
