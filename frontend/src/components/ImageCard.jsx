import React from "react";

const ImageCard = ({ works }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6">
      {works.map((work, index) => (
        <div 
          key={index} 
          className={`rounded-2xl p-4 flex flex-col items-center 
            ${
              index % 4 === 0 // First image
                ? "md:col-span-1 lg:col-span-1"
                : index % 4 === 1 // Second image spans 2 columns
                ? "md:col-span-2 lg:col-span-2"
                : index % 4 === 2 // Third image spans 2 columns
                ? "md:col-span-2 lg:col-span-2"
                : "md:col-span-1 lg:col-span-1" // Fourth column
            }`}
        >
          <img 
            src={work.image} 
            alt={work.title} 
            className="w-full h-64 object-cover rounded-xl bg-pink-100"
          />
          <div className="mt-[-15px] bg-pink-100 px-4 py-2 rounded-xl text-center">
            <h3 className="text-lg font-semibold">{work.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
