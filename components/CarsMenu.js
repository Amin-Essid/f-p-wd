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

function fiterData(
  data,
  type,
  carvane,
  brand,
  model,
  range,
  oldCarvane,
  cell4x4,
  camper,
  perfilada,
  capuchina,
  integral
) {
  let cars = data;
  // console.log(data, type, carvane, brand, model, range);
  console.log("old :" + oldCarvane);
  console.log(cell4x4, camper, perfilada, capuchina, integral);
  if (cell4x4 || camper || perfilada || capuchina || integral) {
    let typedCars = [];
    if (cell4x4) {
      let temp = cars.filter((car) => car.type === "cell4x4");
      console.log(temp);
      typedCars = typedCars.concat(temp);
    }
    if (camper) {
      let temp = cars.filter((car) => car.type === "camper");
      typedCars.concat(temp);
      typedCars = typedCars.concat(temp);
    }
    if (perfilada) {
      let temp = cars.filter((car) => car.type === "perfilada");
      typedCars.concat(temp);
      typedCars = typedCars.concat(temp);
    }
    if (capuchina) {
      let temp = cars.filter((car) => car.type === "capuchina");
      typedCars.concat(temp);
      typedCars = typedCars.concat(temp);
    }
    if (integral) {
      let temp = cars.filter((car) => car.type === "integral");
      typedCars.concat(temp);
      typedCars = typedCars.concat(temp);
    }
    cars = typedCars;
  }
  console.log(cars);
  if (carvane && !oldCarvane) {
    cars = cars.filter((car) => car.new === true);
  }
  if (oldCarvane && !carvane) {
    cars = cars.filter((car) => car.new === false);
    console.log("aasbba");
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
  cars,
  oldCarvane,
  cell4x4,
  camper,
  perfilada,
  capuchina,
  integral,
}) {
  cars = fiterData(
    cars,
    type,
    carvane,
    brand,
    model,
    range,
    oldCarvane,
    cell4x4,
    camper,
    perfilada,
    capuchina,
    integral
  );
  // console.log(cars);
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
            cars.map((car, i) => (
              <div key={i} className="car">
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
