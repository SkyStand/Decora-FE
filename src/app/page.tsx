"use client"
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Header from "@/components/layout/Header";
import Provider from "./components/Provider";
import { useEffect } from "react";


export default function Home() {
  const { checkToken } = Provider();
  useEffect(() => {
    checkToken();
  }, [checkToken]);
  return (
    <main className="" >
      <Navbar isHomePage={true} />
      <Header
        backgroundImage="/images/header/headerhome.png"
        title="Rumahku udah hampir lengkap, tapi aku butuh karpet baru"
        subtitle="Buat ruang untuk hidup lebih baik"
        buttonText="Jelajahi Sekarang"
        buttonLink="/furniture"
        isHomePage={true}
      />
    </main>
  );
}
