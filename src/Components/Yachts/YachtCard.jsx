import React from "react";
import './YachtCard.css'

const YachtCard = ({ yacht }) => {
  return (
    <div className="yacht-card">
      <img src={yacht.image} alt={yacht.name} className="yacht-image" />
      <h3>{yacht.name}</h3>
      <p>{yacht.category}</p>
    </div>
  );
};

export default YachtCard;