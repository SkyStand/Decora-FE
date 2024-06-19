"use client"

import React from 'react';
import Link from 'next/link';
import "/src/app/furniture/style.css";

interface CardProps {
  title: string;
  body: string;
  backgroundImage: string;
  backgroundPosition: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, body, backgroundImage, backgroundPosition, link }) => {
  return (
    <div className="card relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: backgroundPosition }}>
      <div className="card-content">
        <h2 className="card-title font-medium text-xl">{title}</h2>
        <p className="card-body">
          {body}
        </p>
        <Link href={link} legacyBehavior>
          <a className="button">Explore</a>
        </Link>
      </div>
    </div>
  );
};

const RoomTypeBox: React.FC = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className="container mt-96 mb-40 font-worksans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card 
          title="LIVING ROOM" 
          body="Temukan berbagai furnitur untuk ruang tamu Anda yang nyaman dan bergaya." 
          backgroundImage="/images/furniture/livingroom.png" 
          backgroundPosition="-250px"
          link="/furniture/livingroom"
        />
        <Card 
          title="BEDROOM" 
          body="Berbagai pilihan furnitur untuk kamar tidur yang nyaman dan elegan." 
          backgroundImage="/images/furniture/bedroom.png" 
          backgroundPosition="-100px"
          link="/furniture/bedroom"
        />
        <Card 
          title="DINING ROOM" 
          body="Ciptakan ruang makan yang sempurna dengan furnitur berkualitas." 
          backgroundImage="/images/furniture/diningroom.png" 
          backgroundPosition="-240px"
          link="/furniture/diningroom"
        />
        <Card 
          title="OFFICE" 
          body="Furnitur kantor yang fungsional dan estetis untuk produktivitas Anda." 
          backgroundImage="/images/furniture/office.png" 
          backgroundPosition="-340px"
          link="/furniture/office"
        />
        <Card 
          title="OUTDOOR" 
          body="Nikmati kenyamanan di luar ruangan dengan pilihan furnitur outdoor kami." 
          backgroundImage="/images/furniture/outdoor.png" 
          backgroundPosition="-500px"
          link="/furniture/outdoor"
        />
      </div>
    </div>
  );
};

export default RoomTypeBox;
