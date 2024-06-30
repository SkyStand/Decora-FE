"use client"

import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';
import { designers, Designer } from '../../../../../data/Designers';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DesignerPage = () => {
    const { designer_id } = useParams();

    const designer: Designer | undefined = designers.find(d => d.id.toString() === designer_id);

    if (!designer) {
        return <p>Desainer tidak ditemukan</p>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
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
        <main>
            <Navbar isHomePage={false} />
            <div className="container mx-auto mt-28">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-8 max-w-5xl">
                        <Image src={designer.image} alt={designer.name} width={300} height={400} className="w-3/5 h-[500px] object-cover mb-4 md:mb-0 md:mr-8 rounded-lg" />
                        <div className='flex flex-col justify-center h-[600px] w-2/5'>
                            <h1 className="text-4xl font-semibold mb-4 text-center md:text-left">{designer.name}</h1>
                            <p className="text-lg mb-4 text-center md:text-left">{designer.bio}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start max-w-5xl w-full'>
                        <h2 className="text-3xl font-semibold mb-4">Lihat desain {designer.name.split(' ')[0]}</h2>
                        <p className="text-lg mb-8 text-center md:text-left">{designer.description2}</p>
                    </div>
                    <div className="w-full max-w-5xl">
                        <Slider {...settings}>
                            {designer.designs.map((image:string, index:number) => (
                                <div key={index} className="px-2">
                                    <Image src={image} alt={`Design ${index + 1}`} width={300} height={400} className="w-[400px] h-[500px] object-cover rounded-lg" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='my-20 flex flex-col justify-start max-w-4xl'>
                        <h2 className="text-3xl font-semibold mb-4">Puncak arsitektur dan desain</h2>
                        <p className="text-lg mb-8 ">{designer.description3}</p>
                        <h3 className="text-2xl font-semibold mb-2 ">Sebagai {designer.name.split(' ')[0]} mengatakan:</h3>
                        <blockquote className="italic mb-8 text-lg">&quot;{designer.quote}&quot;</blockquote>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DesignerPage;
