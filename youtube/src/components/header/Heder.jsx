import React from "react";
import "./Header.css";

const Header = () => {
 return (
  <header className="header_navbar_container">
   <nav className="navbar">
    <div className="left_navbar">
     <button className="navbar__menu-button">
      <img src="/assets/images/headbar/menu.svg" alt="Menu" />
     </button>

     <a href="#" className="navbar__logo_continer">
      <img
       src="/assets/images/headbar/logo.svg"
       alt="Logo"
       className="navbar__logo"
      />
     </a>
    </div>

    <div className="right_navbar">
     <div className="search_navbar_container">
      <input type="search" className="navbar__search" placeholder="Search" />
      <img
       src="/src/assets/images/headbar/search.svg"
       alt="Search"
       className="search_icon"
      />
     </div>

     <ul className="navbar__icons-list">
      <li className="navbar__icon-item">
       <img
        src="/src/assets/images/headbar/phone.svg"
        alt="Phone"
        className="navbar__icon"
       />
      </li>
      <li className="navbar__icon-item">
       <img
        src="/src/assets/images/headbar/Combined Shape.svg"
        alt="Notifications"
        className="navbar__icon"
       />
      </li>
      <li className="navbar__icon-item">
       <img
        src="/src/assets/images/headbar/ring.svg"
        alt="Ring"
        className="navbar__icon"
       />
      </li>
      <li className="navbar__icon-item">
       <img
        src="/src/assets/images/profiles/myImage.jpg"
        alt="User Avatar"
        className="navbar__avatar"
       />
      </li>
     </ul>
    </div>

    
    <div class="mobile_more">
     <button><img src="/src/assets/images/headbar/search.svg" alt="Search"/></button>
     <button><img src="/src/assets/images/headbar/headerDots.svg" alt="mobileDots" /></button>
    </div>
   </nav>
  </header>
 );
};

export default Header;
