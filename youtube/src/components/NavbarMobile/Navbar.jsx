import "./Navbar.css"

const MobileNavbar = () => {
 return (
  <nav className="mobile-navbar">
   <ul className="mobile-navbar__list">
    <li className="mobile-navbar__item">
     <img src="/first_layout/images/sidebar/Combined-Shape.svg" alt="Home" />
     <p>Home</p>
    </li>
    <li className="mobile-navbar__item">
     <img src="/first_layout/images/sidebar/ui-01.svg" alt="Trending" />
     <p>Trending</p>
    </li>
    <li className="mobile-navbar__item">
     <img src="/first_layout/images/sidebar/ui-45.svg" alt="Subscriptions" />
     <p>Subscriptions</p>
    </li>
    <li className="mobile-navbar__item">
     <img src="/first_layout/images/sidebar/documents-11.svg" alt="Library" />
     <p>Library</p>
    </li>
   </ul>
  </nav>
 );
};

export default MobileNavbar;
