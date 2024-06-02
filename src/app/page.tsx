import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Header from "@/components/layout/Header";
import HomeMenu from "@/components/layout/HomeMenu";
import Provider from "./components/Provider";
import { useEffect } from "react";


export default function Home() {
  const { checkToken } = Provider();
  useEffect(() => {
    checkToken();
  }, [checkToken]);
  return (
    <main className="" >
      <Navbar />
      <Header />
      {/* <Searchbar />   */}
      <HomeMenu />
    </main>
  );
}
