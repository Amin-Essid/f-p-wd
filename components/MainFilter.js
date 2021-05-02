// second_section
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
import Types from "../components/Types";
import Caravane from "../components/Caravane";
import Image from "next/image";
import CustomizedSlider from "../components/Slider";

export default function MainFilter({
  type,
  setType,
  carvane,
  setCarvane,
  setBrand,
  seModel,
  range,
  setRange,
}) {
  return (
    <>
      <div className="second_section">
        <div className="filter_container">
          <Image layout="fill" src="/filter.png" />
          <Types type={type} setType={setType} />
          <Caravane carvane={carvane} setCarvane={setCarvane} />
          <div className="second_filter">
            <div className="select_div">
              <label className="select_div_label" for="cars">
                Brand
              </label>
              <select
                style={{ marginTop: "15px" }}
                onChange={(e) => setBrand(e.target.value)}
                name="cars"
                id="cars"
                form="carform"
                defaultValue=""
              >
                <option disabled value="">
                  All
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="select_div">
              <label className="select_div_label" for="cars">
                Model
              </label>
              <select
                style={{ marginTop: "15px" }}
                onChange={(e) => seModel(e.target.value)}
                defaultValue=""
                name="cars"
                id="cars"
                form="carform"
              >
                <option value="">All</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="select_div">
              <CustomizedSlider range={range} setRange={setRange} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
