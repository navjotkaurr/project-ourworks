import React from "react";
import {works, highlightedWork } from '../../data.js'
import Card from "../components/Card";
import StoryCard from "./StoryCard.jsx";
import ImageCard from "./ImageCard.jsx";


const OurWorks = () => {
  return (
    <>
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Works</h2>

      <Card 
      image = {highlightedWork.image}
      title = {highlightedWork.title}
      description = {highlightedWork.description}
      button = {highlightedWork.button}
      layout = {highlightedWork.layout}
      />

      <ImageCard works={works} />
      
      <StoryCard />
    </div>

    

    </> 

  )
}

export default OurWorks
