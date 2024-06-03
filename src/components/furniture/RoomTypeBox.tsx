import React from 'react';
import "/src/app/furniture/style.css";

interface CardProps {
  title: string;
  body: string;
  backgroundImage: string;
  backgroundPosition: string;
}

const Card: React.FC<CardProps> = ({ title, body, backgroundImage, backgroundPosition }) => {
  return (
    <div className="card relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: backgroundPosition }}>
      <div className="card-content">
        <h2 className="card-title font-medium text-xl">{title}</h2>
        <p className="card-body">
          {body}
        </p>
        <a href="#" className="button">
          Explore
        </a>
      </div>
    </div>
  );
};

const RoomTypeBox: React.FC = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className="container mt-96 mb-40 font-worksans">
        <Card 
          title="LIVING ROOM" 
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa." 
          backgroundImage="/images/furniture/livingroom.png" 
          backgroundPosition="-250px"
        />
        <Card 
          title="BEDROOM" 
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa." 
          backgroundImage="/images/furniture/bedroom.png" 
          backgroundPosition="-100px"
        />
        <Card 
          title="DINING ROOM" 
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa." 
          backgroundImage="/images/furniture/diningroom.png" 
          backgroundPosition="-240px"
        />
        <Card 
          title="OFFICE" 
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa." 
          backgroundImage="/images/furniture/office.png" 
          backgroundPosition="-340px"
        />
        <Card 
          title="OUTDOOR" 
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa." 
          backgroundImage="/images/furniture/outdoor.png" 
          backgroundPosition="-500px"
        />
      </div>
    </div>
  );
};

export default RoomTypeBox;
