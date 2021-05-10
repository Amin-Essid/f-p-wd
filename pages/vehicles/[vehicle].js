import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import { getVehicle } from "../../utils/getVehicle";
import Footer from "../../components/Footer";
import Image from "next/image";
import VehicleDetailsfrom from "../../components/VehicleDetails";
import Button from "@material-ui/core/Button";

export default function SSRPage({ data }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  const { vehicle } = data;
  console.log(vehicle);
  return (
    <>
      <Head>
        <title>{vehicle.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header banner={vehicle.mainImage} />
        <div className="vp_mobile_image">
          <div style={{}}>
            <img
              id="banner"
              src={vehicle.mainImage}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="vp_title">
          <div className="vp_title_name">{vehicle.name}</div>
          <div className="vp_title_price">{`£${numberWithCommas(
            vehicle.price
          )}`}</div>
          <div className="vp_title_icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              style={{ cursor: "pointer", height: "50px" }}
            >
              <Image
                width={50}
                height={50}
                className="rectangle"
                src="/facebook.png"
              />
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              style={{ cursor: "pointer", height: "50px" }}
            >
              <Image
                width={50}
                height={50}
                className="rectangle"
                src="/whatsapp.png"
              />
            </a>
          </div>
        </div>
        <VehicleDetailsfrom
          year={vehicle.year}
          age={vehicle.new}
          info={vehicle.carateristicas}
        />
        <div className="vp_button">
          <Button
            style={{
              width: "15Opx",
              height: "60px",
              backgroundColor: "#ff5300",
            }}
            variant="contained"
            color="secondary"
          >
            comprar
          </Button>
        </div>
      </main>
      <Footer />
    </>
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
