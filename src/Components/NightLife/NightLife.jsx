import React from "react";
import "../Shared/HeroImage.css";
import NightImage from "../Assets/banner_nightlife.jpeg";
import HeroImage from "../Shared/HeroImage";
const NightLife = () => {
  return (
    <div className="my-4">
      <div>
        <HeroImage Image={NightImage}></HeroImage>
      </div>
    </div>
  );
};

export default NightLife;
