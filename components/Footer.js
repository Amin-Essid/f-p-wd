import Link from "next/link";

let types = [
  {
    type: "ALQUILER",
    link: "/",
  },
  {
    type: "VENTA",
    link: "/",
  },
  {
    type: "CAMPERIZACION",
    link: "/",
  },
  {
    type: "4x4",
    link: "/",
  },
  {
    type: "CONTACTO",
    link: "/",
  },
];

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-nav">
          {types.map((type, i) => (
            <div key={i} className="nav_item">
              <Link href={type.link}>
                <h2>{type.type}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
