import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import firebase from "../firebase/clientApp";
import Header from "../components/Header";
import MainFilter from "../components/MainFilter";
import CarsMenu from "../components/CarsMenu";

export default function Home() {
  const [type, setType] = useState("Perfilada");
  const [carvane, setCarvane] = useState("New Caravane");

  const [brand, setBrand] = useState("");
  const [model, seModel] = useState("");

  const [range, setRange] = useState([0, 100]);

  // useEffect(() => {

  // }, [])

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
        <CarsMenu />
      </main>
    </div>
  );
}
