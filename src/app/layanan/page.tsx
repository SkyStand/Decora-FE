"use client"

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar'; 

const ServicePage = () => {
    return (
        <main className="">
            <div className="fixed top-0 w-full z-50">
                <Navbar isHomePage={true} />
            </div>
            <div className="h-screen w-full absolute inset-x-0 top">
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
        </main>
    );
};

export default ServicePage;
