import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import firebase from "../firebase/clientApp";
import Header from "../components/Header";
import MainFilter from "../components/MainFilter";
import CarsMenu from "../components/CarsMenu";
import Footer from "../components/Footer";
// import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Home({ cars }) {
  // const { suggestions } = data;
  const [type, setType] = useState(null);
  const [carvane, setCarvane] = useState(false);
  const [oldCarvane, setOldCarvane] = useState(false);

  const [brand, setBrand] = useState(null);
  const [model, seModel] = useState(null);

  const [cell4x4, seCell4x4] = useState(false);
  const [camper, seCamper] = useState(false);
  const [perfilada, sePerfilada] = useState(false);
  const [capuchina, seCapuchina] = useState(false);
  const [integral, seIntegral] = useState(false);

  const [range, setRange] = useState([0, 100]);

  // console.log(cars);
  console.log(oldCarvane);

  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header banner="/corner.png" />
        <MainFilter
          type={type}
          setType={setType}
          carvane={carvane}
          setCarvane={setCarvane}
          setBrand={setBrand}
          seModel={seModel}
          setRange={setRange}
          range={range}
          oldCarvane={oldCarvane}
          setOldCarvane={setOldCarvane}
          seCell4x4={seCell4x4}
          seCamper={seCamper}
          sePerfilada={sePerfilada}
          seCapuchina={seCapuchina}
          seIntegral={seIntegral}
          cell4x4={cell4x4}
          camper={camper}
          perfilada={perfilada}
          capuchina={capuchina}
          integral={integral}
        />
        <CarsMenu
          carvane={carvane}
          brand={brand}
          model={model}
          range={range}
          cars={cars}
          oldCarvane={oldCarvane}
          cell4x4={cell4x4}
          camper={camper}
          perfilada={perfilada}
          capuchina={capuchina}
          integral={integral}
        />
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const db = firebase.firestore();
  const suggestionsRef = db.collection("vehicles");

  // const [suggestions] = useCollectionData(query, { idField: "ref" });
  let cars = [];
  await suggestionsRef
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let car = {
          id: doc.id,
          data: doc.data(),
        };
        cars.push(car);
        // console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  console.log(cars);
  return {
    props: {
      cars,
    }, // will be passed to the page component as props
  };
}
