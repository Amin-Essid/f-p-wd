import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import { getVehicle } from "../../utils/getVehicle";
import Footer from "../../components/Footer";

export default function SSRPage({ data }) {
  const { vehicle } = data;
  console.log(vehicle);
  return (
    <>
      <Head>
        <title>suggestion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header banner="/corner.png" />
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
