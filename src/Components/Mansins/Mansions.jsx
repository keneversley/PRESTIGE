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

// import React from 'react';
// import HeroImage from '../Shared/HeroImage';
// import MansionImg from '../Assets/banner_mansion.jpeg';
// import villaceline from '../Assets/7_VillaCeline';
// import VillaCelineCard from './VillaCelineCard';
// import blockchain from '../Assets/7_BlockchainManor';
// import BlockchainManor from './BlockchainManor';
// import oasis from '../Assets/4_OasisRetreat';
// import OasisCard from './OasisCard';
// import luna from '../Assets/5_VillaLuna';
// import VillaLuna from './VillaLuna';

// const Mansions = () => {
//   return (
//     <div>
          
//       <HeroImage Image={MansionImg} className="hero-image" />
//       <p className="bold-underline"> Villa Celine </p>
//       <h1 className="center-bold">7 bedrooms 6.5 Bathrooms in Brickell</h1>
//       <div className="villaceline-container">
//         {villaceline.map((celine) => (
//           <VillaCelineCard key={celine.id} celine={celine} />
//         ))}
//       </div>
//       <p className="bold-underline">Blockchain Manor</p>
//       <h1 className="blockchain-bold">6 bedrooms 4 Bathrooms in North Miami</h1>
//       <div className="blockchain-container">
//         {blockchain.map((block) => (
//           <BlockchainManor key={block.id} block={block} />
//         ))}
//       </div>
//       <p className="bold-underline">Oasis</p>
//       <h1 className="center-bold">4 bedrooms 2 Bathrooms in South Miami</h1>
//       <div className="oasis-container">
//         {oasis.map((oasis) => (
//           <OasisCard key={oasis.id} oasis={oasis} />
//         ))}
//       </div>
//       <p className="bold-underline">Villa Luna</p>
//       <h1 className="center-bold">5 bedrooms 4 Bathrooms in Sunny Isles</h1>
//       <div className="villaluna-container">
//         {luna.map((luna) => (
//           <VillaLuna key={luna.id} luna={luna} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mansions;


// import React from 'react';
// import HeroImage from '../Shared/HeroImage';
// import MansionImg from '../Assets/banner_mansion.jpeg';
// import villaceline from '../Assets/7_VillaCeline';
// import VillaCelineCard from './VillaCelineCard';
// import blockchain from '../Assets/7_BlockchainManor';
// import BlockchainManor from './BlockchainManor';
// import oasis from '../Assets/4_OasisRetreat';
// import OasisCard from './OasisCard';
// import luna from '../Assets/5_VillaLuna';
// import VillaLuna from './VillaLuna';

// const Mansions = () => {
//   return (
//     <div>
//       <HeroImage Image={MansionImg} className="hero-image" />

//       <div className="section-container">
//         <div className="text-container">
//           <p className="bold-underline">Villa Celine</p>
//           <h1 className="center-bold">7 bedrooms 6.5 Bathrooms in Brickell</h1>
//         </div>
//         <div className="images-container villaceline-container">
//           {villaceline.map((celine) => (
//             <VillaCelineCard key={celine.id} celine={celine} />
//           ))}
//         </div>
//       </div>

//       <div className="section-container">
//         <div className="text-container">
//           <p className="bold-underline">Blockchain Manor</p>
//           <h1 className="blockchain-bold">6 bedrooms 4 Bathrooms in North Miami</h1>
//         </div>
//         <div className="images-container blockchain-container">
//           {blockchain.map((block) => (
//             <BlockchainManor key={block.id} block={block} />
//           ))}
//         </div>
//       </div>

//       <div className="section-container">
//         <div className="text-container">
//           <p className="bold-underline">Oasis</p>
//           <h1 className="center-bold">4 bedrooms 2 Bathrooms in South Miami</h1>
//         </div>
//         <div className="images-container oasis-container">
//           {oasis.map((oasis) => (
//             <OasisCard key={oasis.id} oasis={oasis} />
//           ))}
//         </div>
//       </div>

//       <div className="section-container">
//         <div className="text-container">
//           <p className="bold-underline">Villa Luna</p>
//           <h1 className="center-bold">5 bedrooms 4 Bathrooms in Sunny Isles</h1>
//         </div>
//         <div className="images-container villaluna-container">
//           {luna.map((luna) => (
//             <VillaLuna key={luna.id} luna={luna} />
//           ))}
//         </div>
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
import luna from '../Assets/5_VillaLuna';
import VillaLuna from './VillaLuna';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Adjust path as necessary
import VillaMira from './VillaMira';
import villaMira from '../Assets/6_VillaMira';
import './Mansions.css'; // Adjust path as
import penthouse from '../Assets/2_PenthousePoblado';
import PenthousePoblado from './PenthousePoblado';
import granada from '../Assets/10_VillaGranada';
import VillaGranada from './VillaGranada';



const Mansions = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <HeroImage Image={MansionImg} className="hero-image" />

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Villa Celine</p>
          <h1 className="center-bold">7 bedrooms 6.5 Bathrooms in Brickell</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {villaceline.map((celine) => (
              <VillaCelineCard key={celine.id} celine={celine} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Blockchain Manor</p>
          <h1 className="blockchain-bold">6 bedrooms 4 Bathrooms in North Miami</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {blockchain.map((block) => (
              <BlockchainManor key={block.id} block={block} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Oasis</p>
          <h1 className="center-bold">4 bedrooms 2 Bathrooms in South Miami</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {oasis.map((oasis) => (
              <OasisCard key={oasis.id} oasis={oasis} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Villa Luna</p>
          <h1 className="center-bold">5 bedrooms 4 Bathrooms in Sunny Isles</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {luna.map((luna) => (
              <VillaLuna key={luna.id} luna={luna} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section-container">
  <div className="text-container">
    <p className="bold-underline">Villa Mira</p>
    <h1 className="center-bold">6 bedrooms 4.5 Bathrooms in Palm Island</h1>
  </div>
  <div className="images-container">
    <Slider {...settings}>
      {villaMira.map((mira) => (
        <VillaMira key={mira.id} mira={mira} />
      ))}
    </Slider>
  </div>
</div>

<div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Penthouse Poblado</p>
          <h1 className="center-bold">2 bedrooms 4 bathroons in Columbia</h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {penthouse.map((pent) => (
              <PenthousePoblado key={pent.id} pent={pent} />
            ))}
          </Slider>
        </div>
      </div>


      <div className="section-container">
        <div className="text-container">
          <p className="bold-underline">Villa Granada</p>
          <h1 className="center-bold">10 bedrooms  10 bathrooms in Coral Gables </h1>
        </div>
        <div className="images-container">
          <Slider {...settings}>
            {granada.map((granada) => (
              <VillaGranada key={granada.id} granada={granada} />
            ))}
          </Slider>
        </div>
      </div>

    </div>
  );
};

export default Mansions;
