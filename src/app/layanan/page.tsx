"use client"

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar'; 
import Header from '@/components/layout/Header';

const ServicePage = () => {
    return (
        <main>
            <Navbar isHomePage={false} />
            <div className="relative">
                <Image 
                    src="/images/header/headerservice.png" 
                    alt="Service Header" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100} 
                    className="w-full h-screen" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-8 lg:px-12">
                    <h2 className="text-lg font-medium mb-2">COMPLIMENTARY DESIGN SERVICES</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">INSPIRED BY YOU</h1>
                    <p className="max-w-xl mb-8">
                        Whether it’s your showplace, sanctuary, or a space where your family can grow, your home should be a stunning representation of your unique style. When you’re ready to reimagine your rooms and spaces, our Complimentary Design Services are here to help.
                    </p>
                    <button className="px-6 py-3 bg-white text-black font-medium rounded-lg">
                        CONNECT WITH A DESIGNER
                    </button>
                </div>
            </div>

            {/* <Header
              backgroundImage="/images/header/headerservice.png"
              title="Rumahku udah hampir lengkap, tapi aku butuh karpet baru"
              subtitle="Buat ruang untuk hidup lebih baik"
              buttonText="Jelajahi Sekarang"
              buttonLink="/furnitur"
              isHomePage={true}
            /> */}
        </main>
    );
};

export default ServicePage;
