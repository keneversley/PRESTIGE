// import React from "react";
// import HeroImage from "../Shared/HeroImage";
// import MansionImg from "../Assets/banner_mansion.jpeg";
// import villaceline from "../Assets/7_VillaCeline";
// import VillaCelineCard from "./VillaCelineCard";

// const Mansions = () => {
//   return (
//     <div>
//       <HeroImage Image={MansionImg} className="hero-image"></HeroImage>
//       <div className="villaceline-container">
//         {villaceline.map((Celine) => ( <VillaCelineCard key={Celine.id} Celine={Celine} /> ))}

//       </div>
//     </div>
//   );
// };

// export default Mansions;

import React from 'react';
import HeroImage from '../Shared/HeroImage';
import MansionImg from '../Assets/banner_mansion.jpeg';
import villaceline from '../Assets/7_VillaCeline';
import VillaCelineCard from './VillaCelineCard';
import blockchain from '../Assets/7_BlockchainManor';
import BlockchainManor from './BlockchainManor';
import oasis from '../Assets/4_OasisRetreat';
import OasisCard from './OasisCard';

const Mansions = () => {
  return (
    <div>
          
      <HeroImage Image={MansionImg} className="hero-image" />
      <p className="bold-underline"> Villa Celine </p>
      <h1 className="center-bold">7 bedrooms 6.5 Bathrooms in Brickell</h1>
      <div className="villaceline-container">
        {villaceline.map((celine) => (
          <VillaCelineCard key={celine.id} celine={celine} />
        ))}
      </div>
      <p className="bold-underline">Blockchain Manor</p>
      <h1 className="blockchain-bold">6 bedrooms 4 Bathrooms in North Miami</h1>
      <div className="blockchain-container">
        {blockchain.map((block) => (
          <BlockchainManor key={block.id} block={block} />
        ))}
      </div>
      <p className="bold-underline">Oasis</p>
      <h1 className="center-bold">4 bedrooms 2 Bathrooms in South Miami</h1>
      <div className="oasis-container">
        {oasis.map((oasis) => (
          <OasisCard key={oasis.id} oasis={oasis} />
        ))}
      </div>
    </div>
  );
};

export default Mansions;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import HeroImage from '../Shared/HeroImage';
// import MansionImg from '../Assets/banner_mansion.jpeg';
// import villaceline from '../Assets/7_VillaCeline';
// import BlockchainManor from '../Assets/7_BlockchainManor';
// import './Mansions.css';

// const Mansions = () => {
//   // Example split of villas data
//   const section1 = villaceline.slice(0, 3);
//   const section2 = villaceline.slice(3, 6);

//   return (
//     <Router>
//       <div>
//         <HeroImage Image={MansionImg} className="hero-image" />
//         <nav className="nav-links">
//           <Link to="/section1">Section 1</Link>
//           <Link to="/section2">Section 2</Link>
//         </nav>
//         <Switch>
//           <Route path="/section1">
//             <BlockchainManor title="Section 1" villas={section1} />
//           </Route>
//           <Route path="/section2">
//             <BlockchainManor title="Section 2" villas={section2} />
//           </Route>
//           <Route path="/">
//             <div>Welcome to Mansions</div>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default Mansions;

// import React from 'react';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import HeroImage from '../Shared/HeroImage';
// import MansionImg from '../Assets/banner_mansion.jpeg';
// import villaceline from '../Assets/7_VillaCeline';
// import BlockchainManor from '../Assets/7_BlockchainManor';
// import './Mansions.css';

// const Mansions = () => {
//   // Example split of villas data
//   const section1 = villaceline.slice(0, 3);
//   const section2 = villaceline.slice(3, 6);

//   return (
//     <Router>
//       <div>
//         <HeroImage Image={MansionImg} className="hero-image" />
//         <nav className="nav-links">
//           <Link to="/section1">Section 1</Link>
//           <Link to="/section2">Section 2</Link>
//         </nav>
//         <Routes>
//           <Route path="/section1" element={<BlockchainManor title="Section 1" villas={section1} />} />
//           <Route path="/section2" element={<BlockchainManor title="Section 2" villas={section2} />} />
//           <Route path="/" element={<div>Welcome to Mansions</div>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Mansions;

// import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom'; // Import Link and Routes
// import HeroImage from '../Shared/HeroImage';
// import MansionImg from '../Assets/banner_mansion.jpeg';
// import villaceline from '../Assets/7_VillaCeline';
// import BlockchainManor from '../Assets/7_BlockchainManor';
// import './Mansions.css';

// const Mansions = () => {
//   const section1 = villaceline.slice(0, 3);
//   const section2 = villaceline.slice(3, 6);

//   return (
//     <div>
//       <HeroImage Image={MansionImg} className="hero-image" />
//       <nav className="nav-links">
//         <Link to="section1">Section 1</Link>
//         <Link to="section2">Section 2</Link>
//       </nav>
//       <Routes>
//         <Route path="section1" element={<BlockchainManor title="Section 1" villas={section1} />} />
//         <Route path="section2" element={<BlockchainManor title="Section 2" villas={section2} />} />
//         <Route path="/" element={<div>Welcome to Mansions</div>} />
//       </Routes>
//     </div>
//   );
// };

// export default Mansions;

