"use client"

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '@/components/layout/Navbar'; 
import Header from '@/components/layout/Header';

const inspirationData = [
    {
        id: 1,
        title: "Klasik",
        description: "Merancang interior arsitektur melibatkan integrasi fungsi, estetika, dan pengalaman pengguna untuk menciptakan ruang yang menarik secara visual dan praktis. Berikut adalah panduan langkah demi langkah untuk merancang interior arsitektur.",
        image: "/images/inspiration/classicinspiration.png",
    },
    {
        id: 2,
        title: "Modern",
        description: "Interior modern adalah tentang menciptakan ruang yang bersih, fungsional, dan sederhana. Jelajahi sekarang untuk melihat bagaimana Anda dapat mencapai tampilan modern di rumah Anda.",
        image: "/images/inspiration/moderninspiration.png",
    },
    {
        id: 3,
        title: "Minimalis",
        description: "Desain interior minimalis adalah tentang kesederhanaan, hanya menggunakan elemen penting untuk menciptakan ruang yang bersih dan tidak berantakan. Cari tahu bagaimana cara mencapai tampilan minimalis di rumah Anda.",
        image: "/images/inspiration/minimalistinspiration.png",
    },
];

const articles = [
  {
      id: 1,
      title: "Pinterest Memprediksi: Tren Dekorasi 2024",
      description: "Krom ubur-ubur dan gothic Barat?",
      image: "/images/articles/article.png",
  },
  {
      id: 2,
      title: "Produk Paling Populer di 2023",
      description: "Apakah favorit Anda masuk dalam daftar?",
      image: "/images/articles/article.png",
  },
  {
      id: 3,
      title: "Bawa Pulang Brutalisme yang Lebih Lembut",
      description: "Berani dan minimalis, dan mengejutkan mengundang",
      image: "/images/articles/article.png",
  },
  {
      id: 4,
      title: "Seorang Desainer Mengambil Inspirasi dari Rumahnya...",
      description: "Material alami dan kekayaan jendela",
      image: "/images/articles/article.png",
  },
  {
      id: 5,
      title: "Jadikan Ruang Makan Anda Multifungsi",
      description: "Tidak ada ruang makan? Ruang makan yang jarang digunakan? Keduanya bisa kami bantu",
      image: "/images/articles/article.png",
  },
  {
      id: 6,
      title: "Menyatukan Gaya Saat Pindah Bersama",
      description: "Gaya yang sangat berbeda bisa hidup bersama bahagia selamanya",
      image: "/images/articles/article.png",
  },
];

const InspirationPage = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      appendDots: (dots: React.ReactNode) => (
          <div className=''>
            <ul style={{ }}> {dots} </ul>
          </div>
      ),
      customPaging: (i: number) => (
          <div
              style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'lightgray',
                  margin: '0 5px'
              }}
          />
      )
  };

    return (
        <main>
            <Navbar isHomePage={false} />
            <Header
              backgroundImage="/images/header/headerfurniture.png"
              title="Inspirasi"
              isHomePage={false}
            />
            <div className="container mx-auto py-8 mt-80 mb-32 font-worksans">
                <Slider {...settings}>
                    {inspirationData.map((item) => (
                        <div key={item.id} className="p-4">
                            <div className="flex flex-col items-center relative">
                                <Image src={item.image} alt={item.title} width={950} height={650} className="w-[950px] h-[650px] object-cover rounded-lg shadow-lg" />
                                <div className="mt-4 w-[950px] text-left">
                                    <h2 className="text-3xl font-crete">{item.title}</h2>
                                    <p className="mt-2">{item.description}</p>
                                    <a href="#" className="text-salmon-3 mt-2">Jelajahi Sekarang</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="container mx-auto py-8">
            <h2 className="mb-4 text-2xl font-worksans font-semibold text-salmon-3">ARTIKEL</h2>
                <h2 className="mb-8 text-5xl font-crete">Wawasan Industri.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24">
                    {articles.map((article) => (
                        <div key={article.id} className="overflow-hidden">
                            <a href="#">
                              <Image src={article.image} alt={article.title} width={365} height={292} className="w-[365px] h-[292px] object-cover" />
                              <div className="py-4">
                                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                                  <p className="text-gray-700 mb-4">{article.description}</p>
                              </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default InspirationPage;
