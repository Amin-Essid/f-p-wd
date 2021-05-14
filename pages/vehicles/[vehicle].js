import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import { getVehicle } from "../../utils/getVehicle";
import Footer from "../../components/Footer";
import Image from "next/image";
import VehicleDetailsfrom from "../../components/VehicleDetails";
import { Popup } from "../../components/Popup";
// import ImageGallery from "react-image-gallery";

export default function SSRPage({ data }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const [interis, setInteris] = useState("5%");
  const [anos, setAnos] = useState("10");
  const [pago, setPago] = useState("0");
  const [monthly, setMonthly] = useState(0);
  const { vehicle } = data;
  console.log(vehicle);
  return (
    <div className="container">
      <Head>
        <title>{vehicle.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header images={vehicle.images} />
        <div className="vp_title">
          <div className="vp_title_name">{vehicle.name}</div>
          <div className="vp_title_price">{`£${numberWithCommas(
            vehicle.price
          )}`}</div>
          <div className="vp_title_icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              style={{ cursor: "pointer", height: "40px" }}
            >
              <Image
                width={40}
                height={40}
                className="rectangle"
                src="/facebook.png"
              />
            </a>
            <a
              href="https://wa.link/qqtau1"
              target="_blank"
              style={{ cursor: "pointer", height: "40px" }}
            >
              <Image
                width={40}
                height={40}
                className="rectangle"
                src="/whatsapp.png"
              />
            </a>
          </div>
        </div>

        {/* <ImageGallery items={vehicle.images} /> */}
        <VehicleDetailsfrom
          year={vehicle.year}
          age={vehicle.new}
          info={vehicle.carateristicas}
          anos={anos}
          interis={interis}
          pago={pago}
          price={vehicle.price}
          setInteris={setInteris}
          setAnos={setAnos}
          setPago={setPago}
          monthly={monthly}
          setMonthly={setMonthly}
        />
        <Popup />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { vehicle } = params;
  let veh = await getVehicle(vehicle);
  if (!veh) {
    return { notFound: true };
  }
  veh = JSON.parse(JSON.stringify(veh));
  return { props: { data: { vehicle: veh } } };
};
