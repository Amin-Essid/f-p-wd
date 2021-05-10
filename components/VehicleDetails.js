import Banner from "./Banner";
// import rectangle from "../images/header_rectangle.png";
// import gladiator from "../images/gladiatorbasica_thumbnail.png";
import Image from "next/image";
import Nav from "./Nav";

export default function VehicleDetails({ info, year, age }) {
  let a = "";
  if (age === true) {
    a = "Nuevo";
  } else {
    a = "usó";
  }
  return (
    <>
      <div className="vp_dash">
        <div className="vp_dash_info">
          <div className="vp_dash_info-title">caraterísticas</div>
          <div className="vp_dash_info-item">{`Estado: ${a}`}</div>
          <div className="vp_dash_info-item">{`Kms: ${info.kms}`}</div>
          <div className="vp_dash_info-item">{`Año: ${year}`}</div>
          <div className="vp_dash_info-item">{`Palazas conducir: ${info["palazas-conducir"]}`}</div>
          <div className="vp_dash_info-item">{`Palazas dormir: ${info["palazas-dormir"]}`}</div>
          <div className="vp_dash_info-item">{`Motor: ${info.motor}`}</div>
          <div className="vp_dash_info-item">{`Camas: ${info.camas}`}</div>
        </div>
        <div className="vp_dash_formula">
          <div className="vp_dash_formula-title">Ofrecemos financiacion</div>
          <div className="vp_dash_formula-form">
            <div
              style={{
                textAlign: "center",
                margin: "10px 0 20px 0",
                fontSize: "20px",
              }}
            >
              <label htmlFor="interis">interis</label>
              <input
                name="interis"
                id="interis"
                defaultValue="5%"
                style={{
                  textAlign: "center",
                  marginLeft: "10px",
                  height: "30px",
                }}
              ></input>
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "20px  0 20px 0",
                fontSize: "20px",
              }}
            >
              <label htmlFor="anos">anos</label>
              <input
                name="anos"
                id="anos"
                defaultValue="10"
                style={{
                  textAlign: "center",
                  marginLeft: "20px",
                  height: "30px",
                }}
              ></input>
            </div>
          </div>
          <div className="vp_dash_formula-result">
            <div style={{ fontSize: "24px", marginTop: "20px" }}>
              Cuota mensual
            </div>
            <div
              style={{
                fontSize: "22px",
                fontFamily: "OstrichSans-regular",
                marginTop: "10px",
              }}
            >
              399 euros
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
