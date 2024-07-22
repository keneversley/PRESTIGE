// import React from 'react';
// import './BlockchainManor.css';

// const BlockchainManor = ({ block }) => {
//   return (
//     <div className="blockchain-card">
//       <div className="blockchain-image-container">
//         <img src={block.image} alt={block.name} className="blockchain-image" />
//         <div className="blockchain-title">{block.name}</div>
//       </div>
//       <p>{block.category}</p>
//     </div>
//   );
// };

// export default BlockchainManor;

// import React, { useState } from 'react';
// import './BlockchainManor.css';

// const BlockchainManor = ({ block }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`blockchain-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
//       <div className="blockchain-image-container">
//         <img src={block.image} alt={block.name} className="blockchain-image" />
//         <div className="blockchain-title">{block.name}</div>
//       </div>
//       <p>{block.category}</p>
//     </div>
//   );
// };

// export default BlockchainManor;



import React from 'react';
import './BlockchainManor.css';

const BlockchainManor = ({ block }) => {
  return (
    <div className="blockchain-card">
      <img src={block.image} alt={block.name} className="blockchain-image" />
      <p>{block.name}</p>
    </div>
  );
};

export default BlockchainManor;
