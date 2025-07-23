import React from "react";
import LeftHeaderNavbar from "./LeftNavbar/LeftHeaderNavbar";
import RightHeaderNavbar from "./RightNavbar/RightHeaderNavbar";
import "./Header.css";

const Header = () => {
 return (
  <header className="header_navbar_container">
   <nav className="navbar">
    <LeftHeaderNavbar/>

    <RightHeaderNavbar/>
    
    <div class="mobile_more">
     <button><img src="/src/assets/images/headbar/search.svg" alt="Search"/></button>
     <button><img src="/src/assets/images/headbar/headerDots.svg" alt="mobileDots" /></button>
    </div>
   </nav>
  </header>
 );
};

export default Header;
