// second_section
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";
import Image from "next/image";

export default function Caravane({ carvane, setCarvane }) {
  let firstClass = "",
    secondClass = "";
  if (carvane === "new") {
    (firstClass = "checked_op radio"), (secondClass = "radio");
  } else if (carvane === "old") {
    (secondClass = "checked_op radio"), (firstClass = "radio");
  }
  return (
    <>
      <div defaultValue={carvane} className="middle_filter">
        <div>
          <div onClick={() => setCarvane("new")} className="radio">
            <input
              type="radio"
              id="New Caravane"
              name="New Caravane"
              value="New Caravane"
            />
            <label htmlFor="New Caravane" className={firstClass}>
              New Caravane
            </label>
          </div>
          <div onClick={() => setCarvane("old")} className="radio">
            <input
              type="radio"
              id="Used Caravane"
              name="Used Caravane"
              value="Used Caravane"
            />
            <label className={secondClass} htmlFor="Used Caravane">
              Used Caravane
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
