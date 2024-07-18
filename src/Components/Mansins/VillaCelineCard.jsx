// import React from 'react'
// import './VillaCelineCard.css'

// const VillaCelineCard = ({ celine }) => {
//     return (
//         <div className="villaceline-card">
//             <img src={celine.image} alt={celine.name} className="villaceline-image" />
//             <h3>{celine.name}</h3>
//             <p>celine.category</p>
//         </div>
//     );
// };
// export default VillaCelineCard

// import React from 'react';
// import './VillaCelineCard.css';

// const VillaCelineCard = ({ celine }) => {
//   return (
//     <div className="villaceline-card">
//       <img src={celine.image} alt={celine.name} className="villaceline-image" />
//       <h3>{celine.name}</h3>
//       <p>{celine.category}</p>
//     </div>
//   );
// };

// export default VillaCelineCard;

// import React from 'react';
// import './VillaCelineCard.css';

// const VillaCelineCard = ({ celine }) => {
//   return (
//     <div className="villaceline-card">
//       <div className="villaceline-image-container">
//         <img src={celine.image} alt={celine.name} className="villaceline-image" />
//         <div className="villaceline-title">{celine.name}</div>
//       </div>
//       <p>{celine.category}</p>
//     </div>
//   );
// };

// export default VillaCelineCard;

import React, { useState } from 'react';
import './VillaCelineCard.css';

const VillaCelineCard = ({ celine }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`villaceline-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="villaceline-image-container">
        <img src={celine.image} alt={celine.name} className="villaceline-image" />
        <div className="villaceline-title">{celine.name}</div>
      </div>
      <p>{celine.category}</p>
    </div>
  );
};

export default VillaCelineCard;

