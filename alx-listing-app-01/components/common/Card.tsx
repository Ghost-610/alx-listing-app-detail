import React from "react";

interface CardProps {
  image: string;
  title: string;
  location: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, title, location, price }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-base font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default Card;
