import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Header from "@/components/layout/Header";
import HomeMenu from "@/components/layout/HomeMenu";
import Searchbar from "@/components/layout/Searchbar";


export default function Home() {
  return (
    <main className="" >
      <Navbar />
      <Header />
      {/* <Searchbar />   */}
      <HomeMenu />
    </main>
  );
}
