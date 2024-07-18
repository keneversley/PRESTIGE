import React from "react";
import HeroImage from "../Shared/HeroImage";
import YachtsImg from "../Assets/banner_yachts.jpeg";
import yachts from "../Assets/yachts"; // Update the path to where the yachts array is located
import YachtCard from "./YachtCard"; // create this component


const YachtsUpdate = () => {
  return (
    <div>
      <HeroImage Image={YachtsImg} className="hero-image"></HeroImage>
      <div className="yachts-container">
        {yachts.map((yacht) => (
          <YachtCard key={yacht.id} yacht={yacht} />
        ))}
      </div>
    </div>
    
  );
};

export default YachtsUpdate;

