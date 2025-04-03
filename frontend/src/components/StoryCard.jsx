import React from 'react';
import { storyData } from '../../data';

const StoryCard = () => {
  return (
    <div className="flex items-center justify-between gap-8 p-6">

         <div className="w-1/3">
        <h1 className="text-3xl font-bold mb-4">Stories Of Change</h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolore illo. Nulla sequi soluta voluptatem ullam praesentium, maiores similique ratione, provident iure accusamus rem placeat? Blanditiis nihil sunt at ducimus.
        </p>
      </div>

      <div className="w-1/2 rounded-xl">
        <img
          src={storyData.image} // Make sure storyData has an image key
          alt="Story image"
          className="w-20 h-40 object-cover rounded-xl"
        />

        <div className='p-4 rounded-b-2xl bg-green-100'>
            <h3 className='text-md font-bold'>A Journey of hope</h3>
            <p className='mt-1 text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officiis eius pariatur dignissimos </p>
            <span className='text-orange-500 font-semibold mt-2 cursor-pointer'>Read More</span>
        </div>
      </div>

      {/* Right Side: Text Content */}
     
    </div>
  );
};

export default StoryCard;
