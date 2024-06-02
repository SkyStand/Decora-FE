import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";


export default function Home() {
  return (
    <main className="" >
      <Navbar isHomePage={true} />
      <Header
        backgroundImage="/images/header/headerhome.png"
        title="Rumahku udah hampir lengkap, tapi aku butuh karpet baru"
        subtitle="Buat ruang untuk hidup lebih baik"
        buttonText="Jelajahi Sekarang"
        buttonLink="/furnitur"
        isHomePage={true}
      />
    </main>
  );
}
