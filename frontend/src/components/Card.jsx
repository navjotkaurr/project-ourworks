import React from "react";

const Card = ({ image, title, description, button, onClick}) => {
  return (
    <div className='rounded-lg p-2 flex items-center'>
      <img src={image} alt={title} className="w-1/2 rounded-lg"/>
      <div className="flex flex-col items-center bg-pink-100 w-1/2 rounded-xl h-full p-4 min-h-[200px]">
        <h3 className="text-lg font-semibold mt-2 mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-sm text-center mb-2">{description}</p>
        <button
          className="mt-6 bg-orange-400 text-white px-4 py-2 rounded-3xl hover:bg-orange-500"
          onClick={onClick}
        >
          {button}
        </button>
      </div>
    </div>
  )
}

export default Card;
