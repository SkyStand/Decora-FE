"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '@/components/layout/Navbar';

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
        "/images/services/galleryservice1.png",
        "/images/services/galleryservice2.png",
        "/images/services/galleryservice3.png",
        "/images/services/galleryservice4.png",
        "/images/services/galleryservice5.png",
        "/images/services/galleryservice6.png",
        "/images/services/galleryservice7.png"
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

    const designers = [
        {
            name: "Andi Wijaya",
            description: "Andi Wijaya merancang furnitur bergaya dengan berbagai fungsi. Ia berdedikasi untuk membawa warisan Indonesia ke audiens internasional dan berhasil dalam hal ini dengan fokus pada mengoptimalkan proses produksi dan membuatnya efisien tanpa mengorbankan tampilan.",
            link: "#",
            image: "/images/services/agamriadi.png"
        },
        {
            name: "Budi Setiawan",
            description: "Budi Setiawan lulus sebagai desainer mode pada tahun 1990 tetapi menggunakan pendidikannya untuk mengeksplorasi seluruh spektrum desain. Ketertarikannya pada matematika bersama dengan pengalamannya yang luas memberinya kemampuan intuitif untuk dengan cepat menilai apakah sebuah desain baru akan berhasil atau tidak.",
            link: "#",
            image: "/images/services/rezawahyudi.png"
        },
        {
            name: "Citra Nirmala",
            description: "Citra Nirmala selalu setia pada warisan desain Indonesia yang sangat menjadi bagian dari pendidikan dan pertumbuhannya. 'Saya tumbuh dengan fungsionalisme dan kerajinan tangan. Arsitek Indonesia tahun 50-an dan 60-an adalah teman orang tua saya dan di antara guru-guru saya di Sekolah Arsitektur.'",
            link: "#",
            image: "/images/services/yinjie.png"
        },
        {
            name: "Dewi Anjani",
            description: "Dengan gelar Master di bidang Arsitektur dan Desain serta bertahun-tahun pengalaman di industri furnitur, Dewi Anjani menciptakan desain yang didasarkan pada pengetahuan profesional dan dibuat untuk penggunaan sehari-hari.",
            link: "#",
            image: "/images/services/shierlygouw.png"
        }
    ];

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
                            <Image src={designer.image} alt={designer.name} width={300} height={400} className="w-1[300] h-[400] object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold mb-2">{designer.name}</h3>
                            <p className="text-gray-700 mb-4">{designer.description}</p>
                            <a href={designer.link} className="text-blue-500 underline">Kenali {designer.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ServicePage;
