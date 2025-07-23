import homeIcon from "/src/assets/images/sidebar/Combined-Shape.svg";
import trendingIcon from "/src/assets/images/sidebar/ui-01.svg";
import subsIcon from "/src/assets/images/sidebar/ui-45.svg";
import libraryIcon from "/src/assets/images/sidebar/documents-11.svg";
import "./navbar.css"

const MobileNavbar = () => {
 return (
  <nav className="mobile-navbar">
   <ul className="mobile-navbar__list">
    <li className="mobile-navbar__item">
     <img src={homeIcon} alt="Home" />
     <p>Home</p>
    </li>
    <li className="mobile-navbar__item">
     <img src={trendingIcon} alt="Trending" />
     <p>Trending</p>
    </li>
    <li className="mobile-navbar__item">
     <img src={subsIcon} alt="Subscriptions" />
     <p>Subscriptions</p>
    </li>
    <li className="mobile-navbar__item">
     <img src={libraryIcon} alt="Library" />
     <p>Library</p>
    </li>
   </ul>
  </nav>
 );
};

export default MobileNavbar;
