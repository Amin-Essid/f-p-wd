const calcPay = (p, pago, r, t) => {
  let n = 12;
  p = p - pago;
  console.log(p, pago, r, t);
  let first = ((r / n) * (1 + r / n) ** n) ** t;
  console.log(first);
  // console.log(p, pago, r, t);
  let payment =
    (p * ((r / n) * (1 + r / n) ** n) ** t) / (1 + ((r / n) ** n) ** t - 1);
  return payment;
};

export default function VehicleDetails({
  info,
  year,
  age,
  setPago,
  setAnos,
  setInteris,
  monthly,
}) {
  let a = "";
  if (age === true) {
    a = "Nuevo";
  } else {
    a = "usó";
  }
  console.log(calcPay(110000, 10000, 0.06, 30));
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
                onChange={(e) => setInteris(e.target.value)}
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
                onChange={(e) => setAnos(e.target.value)}
              ></input>
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "10px 0 20px -30px",
                fontSize: "20px",
              }}
            >
              <label htmlFor="pago">Pago Inicial</label>
              <input
                name="pago"
                id="pago"
                defaultValue="0"
                style={{
                  textAlign: "center",
                  marginLeft: "10px",
                  height: "30px",
                }}
                onChange={(e) => setPago(e.target.value)}
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
              {`${monthly} euros`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
