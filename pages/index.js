import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import firebase from "../firebase/clientApp";
import Header from "../components/Header";
import MainFilter from "../components/MainFilter";
import CarsMenu from "../components/CarsMenu";
// import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Home({ cars }) {
  // const { suggestions } = data;
  const [type, setType] = useState(null);
  const [carvane, setCarvane] = useState(null);

  const [brand, setBrand] = useState(null);
  const [model, seModel] = useState(null);

  const [range, setRange] = useState([0, 100]);

  console.log(cars);

  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <MainFilter
          type={type}
          setType={setType}
          carvane={carvane}
          setCarvane={setCarvane}
          // brand={brand}
          setBrand={setBrand}
          // model={model}
          seModel={seModel}
          setRange={setRange}
          range={range}
        />
        <CarsMenu
          type={type}
          carvane={carvane}
          brand={brand}
          model={model}
          setRange={setRange}
          range={range}
          cars={cars}
        />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const db = firebase.firestore();
  const suggestionsRef = db.collection("vehicles");
  const query = suggestionsRef;

  // const [suggestions] = useCollectionData(query, { idField: "ref" });
  let cars = [];
  await suggestionsRef
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        cars.push(doc.data());
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
