function PMT(ir, np, pv, fv, type) {
  /*
   * ir   - interest rate per month
   * np   - number of periods (months)
   * pv   - present value
   * fv   - future value
   * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */
  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0) return -(pv + fv) / np;

  pvif = Math.pow(1 + ir, np);
  pmt = (-ir * (pv * pvif + fv)) / (pvif - 1);

  if (type === 1) pmt /= 1 + ir;

  return pmt;
}

export default function VehicleDetails({
  info,
  year,
  age,
  interis,
  setPago,
  setAnos,
  setInteris,
  monthly,
  anos,
  pago,
  price,
  setMonthly,
}) {
  let a = "";
  if (age === true) {
    a = "Nuevo";
  } else {
    a = "usó";
  }

  const convert = (s, one) => {
    let n = parseInt(s.replace(/\D/g, ""));
    if (!Number(n) && one) {
      n = 0.08333333333;
    } else if (!Number(n)) {
      n = 0;
    }
    console.log(n);
    return n;
  };

  let ir = convert(interis) / 100 / 12,
    np = 12 * convert(anos, true),
    pv = price - convert(pago);
  let m = PMT(ir, np, pv) * -1;
  m = m.toFixed(2);
  console.log(m);
  setMonthly(m);
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
