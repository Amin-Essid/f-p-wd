import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
import Header from "../components/Header";
import MainFilter from "../components/MainFilter";
import CarsMenu from "../components/CarsMenu";

export default function Home() {
  // Our custom hook to get context values

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
        <MainFilter />
        <CarsMenu />
      </main>
    </div>
  );
}
