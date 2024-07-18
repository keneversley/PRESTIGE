import React, { useState } from 'react';
import './OasisCard.css';

const OasisCard = ({ oasis }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`oasis-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="oasis-image-container">
        <img src={oasis.image} alt={oasis.name} className="oasis-image" />
        <div className="oasis-title">{oasis.name}</div>
      </div>
      <p>{oasis.category}</p>
    </div>
  );
};

export default OasisCard;

