"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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

    return (
        <main className="">
            <div className="fixed top-0 w-full z-50">
                <Navbar isHomePage={!isScrolled} />
            </div>
            <div className="h-screen w-full">
                <Image 
                    src="/images/header/headerservice.png" 
                    alt="Service Header" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100} 
                    className="absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-transparent z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-salmon-1 font-worksans px-4 md:px-8 lg:px-12 z-20 max-w-7xl mx-auto">
                    <h2 className="text-lg font-medium mb-2">COMPLIMENTARY DESIGN SERVICES</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-crete">INSPIRED BY YOU</h1>
                    <p className="max-w-lg mb-8">
                        Whether it’s your showplace, sanctuary, or a space where your family can grow, your home should be a stunning representation of your unique style. When you’re ready to reimagine your rooms and spaces, our Complimentary Design Services are here to help.
                    </p>
                    <button className="px-6 py-3 max-w-sm bg-opacity-70 bg-salmon-1 text-blue-tua font-semibold rounded-3xl">
                        CONNECT WITH A DESIGNER
                    </button>
                </div>
            </div>
            <div className="relative w-full py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto font-worksans">
                {[
                    {
                        title: "FIRST",
                        heading: "IT STARTS WITH A CONVERSATION",
                        text: "Our creative partnership begins with a virtual or in-person consultation, where our Design Team will take the time to learn more about you, your style, and your aspirations for your home.",
                        image: "/images/services/service1.png"
                    },
                    {
                        title: "NEXT",
                        heading: "YOUR DESIGN TAKES SHAPE",
                        text: "From customizing furniture to selecting the perfect shades and silhouettes for your space, your vision will come to life with the guidance of a seasoned Arhaus Interior Designer. They’ll create a virtually seamless experience with your timeline, budget, and preferences in mind.",
                        image: "/images/services/service2.png",
                        reverse: true
                    },
                    {
                        title: "THEN",
                        heading: "YOUR DREAM BECOMES REALITY",
                        text: "Once complete, you’ll enjoy a space infused with your unique sense of style, your Interior Designer’s creativity, and the Arhaus furniture and décor you adore.",
                        image: "/images/services/service3.png"
                    }
                ].map((section, index) => (
                    <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20 ${section.reverse ? 'md:order-1' : ''}`}>
                        {!section.reverse && (
                            <div>
                                <h3 className="font-bold text-blue-tua mb-2">{section.title}</h3>
                                <h2 className="text-2xl md:text-6xl mb-4 text-blue-tua font-light">{section.heading}</h2>
                                <p className="text-gray-700 mb-8">{section.text}</p>
                            </div>
                        )}
                        <div className={`${section.reverse ? 'order-2 md:order-1' : ''}`}>
                            <Image 
                                src={section.image} 
                                alt={section.heading} 
                                width={550} 
                                height={650} 
                                className="w-[700px] h-[750px] object-cover shadow-lg" 
                            />
                        </div>
                        {section.reverse && (
                            <div className="order-1 md:order-2">
                                <h3 className="font-bold text-blue-tua mb-2">{section.title}</h3>
                                <h2 className="text-2xl md:text-6xl mb-4 text-blue-tua font-light">{section.heading}</h2>
                                <p className="text-gray-700 mb-8">{section.text}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default ServicePage;
