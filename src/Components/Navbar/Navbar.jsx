// import React from "react";
// import "./Navbar.css";
// import logo from "../Assets/logo.png";
// import cart_icon from "../Assets/cart_icon.png";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// // export const Navbar = () => {
// //   const [menu, setMenu] = useState("shop");

// export const Navbar = () => {
//   const [menu, setMenu] = useState("shop");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="" />
//         <p>PRESTIGE</p>
//       </div>

//       <div className="nav-toggle" onClick={toggleMenu}>
//         <span className="hamburger"></span>
//         <span className="hamburger"></span>
//         <span className="hamburger"></span>
//       </div>
//       <ul className="nav-menu" >
//         <li
//           onClick={() => {
//             setMenu("home");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/">
//             Home
//           </Link>
//           {menu === "home" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("nightlife");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/nightlifes">
//             Nightlife
//           </Link>
//           {menu === "nightlife" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("restaurants");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/restaurant">
//             Restaurants
//           </Link>
//           {menu === "restaurants" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("mansion");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/mansions">
//             Mansion/Villas/PentHouse
//           </Link>
//           {menu === "mansion" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("exoticcars");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/exotics">
//             Exotic Cars
//           </Link>
//           {menu === "exoticcars" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("yachts");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/yacht">
//             Yachts
//           </Link>
//           {menu === "yachts" ? <hr /> : <></>}
//         </li>
//       </ul>
//       <div className="nav-login-cart">
//         <Link to="/login">
//           <button>Login</button>
//         </Link>
//         <Link to="/cart">
//           <img src={cart_icon} alt="" />
//         </Link>
//         <div className="nav-cart-count">0</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";


export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>PRESTIGE</p>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li onClick={() => setMenu("home")}>
          <Link to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("nightlife")}>
          <Link to="/nightlifes">Nightlife</Link>
          {menu === "nightlife" && <hr />}
        </li>
        <li onClick={() => setMenu("restaurants")}>
          <Link to="/restaurant">Restaurants</Link>
          {menu === "restaurants" && <hr />}
        </li>
        <li onClick={() => setMenu("mansion")}>
          <Link to="/mansions">Mansion/Villas/PentHouse</Link>
          {menu === "mansion" && <hr />}
        </li>
        <li onClick={() => setMenu("exoticcars")}>
          <Link to="/exotics">Exotic Cars</Link>
          {menu === "exoticcars" && <hr />}
        </li>
        <li onClick={() => setMenu("yachts")}>
          <Link to="/yacht">Yachts</Link>
          {menu === "yachts" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;

