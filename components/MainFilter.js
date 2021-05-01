// second_section
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
import Types from "../components/Types";
import Image from "next/image";
import CustomizedSlider from "../components/Slider";

export default function MainFilter() {
  return (
    <>
      <div className="second_section">
        <div className="filter_container">
          <Image layout="fill" src="/filter.png" />
          <Types />
          <div className="middle_filter">
            <div>
              <div className="radio">
                <input type="radio" id="male" name="gender" value="male" />
                <label className="checked_op">New Caravane</label>
              </div>
              <div className="radio">
                <input type="radio" id="male" name="gender" value="male" />
                <label>Used Caravane</label>
              </div>
            </div>
          </div>
          <div className="second_filter">
            <div className="select_div">
              <label className="select_div_label" for="cars">
                Brand
              </label>
              <select name="cars" id="cars" form="carform">
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
              <select name="cars" id="cars" form="carform">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="select_div">
              <CustomizedSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
