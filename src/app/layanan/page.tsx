"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { designers } from '../../../data/Designers';

const ServicePage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 350) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const galleryImages = [
        "/images/services/slidegallery/galleryservice1.png",
        "/images/services/slidegallery/galleryservice2.png",
        "/images/services/slidegallery/galleryservice3.png",
        "/images/services/slidegallery/galleryservice4.png",
        "/images/services/slidegallery/galleryservice5.png",
        "/images/services/slidegallery/galleryservice6.png",
        "/images/services/slidegallery/galleryservice7.png"
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    interface ArrowProps {
        className?: string;
        style?: React.CSSProperties;
        onClick?: () => void;
    }

    function SampleNextArrow(props: ArrowProps) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: "10px", fontSize: "30px" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: ArrowProps) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: "10px", zIndex: 1, fontSize: "30px" }}
                onClick={onClick}
            />
        );
    }
    return (
        <main className="">
            <div className="fixed top-0 w-full z-50">
                <Navbar isHomePage={!isScrolled} />
            </div>
            <div className="h-screen w-full">
                <Image src="/images/header/headerservice.png" alt="Service Header" layout="fill" objectFit="cover" quality={100} className="absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-transparent z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-salmon-1 font-worksans px-4 md:px-8 lg:px-12 z-20 max-w-7xl mx-auto">
                    <h2 className="text-lg font-medium mb-2">LAYANAN DESAIN GRATIS</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-crete">TERINSPIRASI OLEH ANDA</h1>
                    <p className="max-w-lg mb-8">
                        Apakah itu ruang pameran, tempat perlindungan, atau ruang di mana keluarga Anda dapat tumbuh, rumah Anda harus menjadi representasi menakjubkan dari gaya unik Anda. Ketika Anda siap untuk membayangkan ulang ruangan dan ruang Anda, Layanan Desain Gratis kami siap membantu.
                    </p>
                    <button className="px-6 py-3 max-w-sm bg-opacity-70 bg-salmon-1 text-blue-tua font-semibold rounded-3xl">
                        HUBUNGI DESAINER
                    </button>
                </div>
            </div>
            <div className="relative w-full py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto font-worksans">
                {[
                    {
                        title: "PERTAMA",
                        heading: "DIMULAI DENGAN KONSULTASI",
                        text: "Kemitraan kreatif kami dimulai dengan konsultasi virtual atau langsung, di mana Tim Desain kami akan meluangkan waktu untuk mengenal Anda lebih baik, gaya Anda, dan aspirasi Anda untuk rumah Anda.",
                        image: "/images/services/service1.png"
                    },
                    {
                        title: "BERIKUTNYA",
                        heading: "DESAIN ANDA MULAI TERBENTUK",
                        text: "Dari menyesuaikan furnitur hingga memilih warna dan siluet yang sempurna untuk ruang Anda, visi Anda akan hidup dengan bimbingan dari Desainer Interior berpengalaman. Mereka akan menciptakan pengalaman yang hampir tanpa batas dengan timeline, anggaran, dan preferensi Anda.",
                        image: "/images/services/service2.png",
                        reverse: true
                    },
                    {
                        title: "KEMUDIAN",
                        heading: "MIMPI ANDA MENJADI KENYATAAN",
                        text: "Setelah selesai, Anda akan menikmati ruang yang dipenuhi dengan gaya unik Anda, kreativitas Desainer Interior Anda, dan furnitur serta dekorasi yang Anda cintai.",
                        image: "/images/services/service3.png"
                    }
                ].map((section, index) => (
                    <div key={index} className={`grid grid-cols-1 md:grid-cols-5 gap-8 items-center mb-20`}>
                        {!section.reverse && (
                            <div className="md:col-span-2">
                                <h3 className="font-bold text-blue-tua mb-2 pl-1">{section.title}</h3>
                                <h2 className="text-2xl md:text-6xl mb-4 text-blue-tua font-light">{section.heading}</h2>
                                <p className="text-gray-700 mb-8">{section.text}</p>
                            </div>
                        )}
                        <div className="md:col-span-3">
                            <Image src={section.image} alt={section.heading} width={700} height={750} className="w-full h-full object-cover shadow-lg" />
                        </div>
                        {section.reverse && (
                            <div className="md:col-span-2">
                                <h3 className="font-bold text-blue-tua mb-2 pl-1">{section.title}</h3>
                                <h2 className="text-2xl md:text-6xl mb-4 text-blue-tua font-light">{section.heading}</h2>
                                <p className="text-gray-700 mb-8">{section.text}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="relative w-full py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto font-worksans">
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10 font-light text-blue-tua text-center">GALERI PROYEK</h2>
                <Slider {...settings}>
                    {galleryImages.map((image, index) => (
                        <div key={index}>
                            <Image src={image} alt={`Gallery Image ${index + 1}`} width={1200} height={800} className="w-full h-full object-cover rounded-lg"/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="relative w-full py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto font-worksans">
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10 font-light text-blue-tua text-center">KENALI DESAINER KAMI</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {designers.map((designer, index) => (
                        <div key={index} className="">
                            <Image src={designer.image} alt={designer.name} width={300} height={400} className="w-[300px] h-[400px] object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl mb-1 font-crete">{designer.name}</h3>
                            <p className="text-gray-700 mb-3">{designer.description1}</p>
                            <Link legacyBehavior href={`/layanan/designers/${designer.id}`}>
                                <a className="text-salmon-3 flex items-center gap-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F08E80" xmlns="http://www.w3.org/2000/svg"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"/></svg>
                                    Mengenal {designer.name.split(' ')[0]}
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ServicePage;
