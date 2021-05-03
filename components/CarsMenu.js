// second_section
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function fiterData(data, type, carvane, brand, model, range) {
  let cars = data;
  console.log(data, type, carvane, brand, model, range);
  if (type) {
    cars = cars.filter((car) => car.type === type);
  }
  if (carvane) {
    let n = null;
    if (carvane === "new") {
      n = true;
    } else if (carvane === "old") {
      n = false;
    }
    cars = cars.filter((car) => car.new === n);
  }
  if (brand) {
    cars = cars.filter((car) => car.brand === brand);
  }
  if (model) {
    cars = cars.filter((car) => car.model === model);
  }
  if (range.length > 0) {
    cars = cars.filter((car) => car.price >= range[0] * 1000);
    cars = cars.filter((car) => car.price <= range[1] * 1000);
  }
  return cars;
}

export default function CarsMenu({
  type,
  carvane,
  brand,
  model,
  range,
  setRange,
  cars,
}) {
  cars = fiterData(cars, type, carvane, brand, model, range);
  console.log(cars);
  return (
    <>
      <div className="third_section">
        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "center",
            fontSize: "42px",
            fontWeight: "500",
            margin: "0 auto !important",
          }}
        >
          Results
        </div>
        <div className="cars">
          {!cars && <div>LOADING ...</div>}
          {cars &&
            cars.map((car) => (
              <div className="car">
                <img
                  style={{ width: "200px", height: "150px" }}
                  src={car.image}
                />
                <div
                  style={{
                    fontSize: "18px",
                    margin: "10px 0",
                    fontWeight: "200",
                    color: "grey",
                  }}
                >{`REF: ${car.ref}`}</div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  {car.name}
                </div>
                <div
                  style={{
                    color: "#ff5300",
                    fontSize: "36px",
                    margin: "10px 0",
                  }}
                >{`£${numberWithCommas(car.price)}`}</div>
                <div className="more">
                  <div style={{ margin: "0 auto", width: "100px" }}>
                    More Details &#8594;
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
