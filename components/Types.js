import Image from "next/image";

export default function Types({
  cell4x4,
  camper,
  perfilada,
  capuchina,
  integral,
  seCell4x4,
  seCamper,
  sePerfilada,
  seCapuchina,
  seIntegral,
}) {
  let cell4x4Class = "radio",
    camperClass = "radio",
    perfiladaClass = "radio",
    capuchinaClass = "radio",
    integralClass = "radio";

  if (cell4x4 === true) {
    cell4x4Class = "checked_op radio";
  }
  if (camper === true) {
    camperClass = "checked_op radio";
  }
  if (perfilada === true) {
    perfiladaClass = "checked_op radio";
  }
  if (capuchina === true) {
    capuchinaClass = "checked_op radio";
  }
  if (integral === true) {
    integralClass = "checked_op radio";
  }

  let types = [
    {
      title: "Célula 4x4",
      type: "cell4x4",
      image: "/type_cell.png",
      class: cell4x4Class,
      fun: seCell4x4,
    },
    {
      title: "Camper",
      type: "camper",
      image: "/type_camper.png",
      class: camperClass,
      fun: seCamper,
    },
    {
      title: "Perfilada",
      type: "perfilada",
      image: "/type_perfilada.png",
      class: perfiladaClass,
      fun: sePerfilada,
    },
    {
      title: "Capuchina",
      type: "capuchina",
      image: "/type_capuchina.png",
      class: capuchinaClass,
      fun: seCapuchina,
    },
    {
      title: "Integral",
      type: "integral",
      image: "/type_integral.png",
      class: integralClass,
      fun: seIntegral,
    },
  ];

  return (
    <>
      <div className="types">
        {types.map((t, i) => {
          return (
            <div
              key={i}
              onClick={(e) => t.fun(e.target.checked)}
              key={i}
              className="type "
            >
              <Image src={t.image} width={180} height={100} />
              <div style={{ marginTop: "15px" }} className="radio">
                <input
                  type="checkbox"
                  id={t.title}
                  name={t.title}
                  value={t.title}
                />
                <label htmlFor={t.title} className={t.class}>
                  {t.title}
                </label>
              </div>
            </div>
          );
          // }
        })}
      </div>
    </>
  );
}
