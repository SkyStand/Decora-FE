import Image from "next/image";
import { Hero } from "../components";
import Navbar from "../components/layout/Navbar";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Navbar />
    </main>
  );
}
