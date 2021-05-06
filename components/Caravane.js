// second_section
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";
import Image from "next/image";

export default function Caravane({
  carvane,
  setCarvane,
  oldCarvane,
  setOldCarvane,
}) {
  let firstClass = "radio",
    secondClass = "radio";
  console.log(carvane, oldCarvane);
  if (carvane === true) {
    firstClass = "checked_op radio";
  }
  if (oldCarvane === true) {
    secondClass = "checked_op radio";
  }
  return (
    <>
      <div defaultValue={carvane} className="middle_filter">
        <div>
          <div onClick={(e) => setCarvane(e.target.checked)} className="radio">
            <input
              type="checkbox"
              id="New Caravane"
              name="New Caravane"
              value="New Caravane"
            />
            <label htmlFor="New Caravane" className={firstClass}>
              New Caravane
            </label>
          </div>
          <div
            onClick={(e) => setOldCarvane(e.target.checked)}
            className="radio"
          >
            <input
              type="checkbox"
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
