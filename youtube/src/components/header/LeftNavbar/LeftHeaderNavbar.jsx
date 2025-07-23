import "./LeftHeaderNavbar.css"

export default function LeftHeaderNavbar() {
 return (
  <div className="left_navbar">
   <button className="navbar__menu-button">
    <img src="/images/headbar/menu.svg" alt="Menu" />
   </button>

   <a href="#" className="navbar__logo_continer">
    <img
     src="/images/headbar/logo.svg"
     alt="Logo"
     className="navbar__logo"
    />
   </a>
  </div>
 );
}
