import "./RightHeaderNavbar.css";

export default function RightHeaderNavbar() {
 return (
  <div className="right_navbar">
   <div className="search_navbar_container">
    <input type="search" className="navbar__search" placeholder="Search" />
    <img
     src="/src/assets/images/headbar/search.svg"
     alt="Search"
     className="search_icon"
    />
   </div>

   <ul class="navbar__icons-list">
    <li class="navbar__icon-item">
     <img
      src="/src/assets/images/headbar/phone.svg"
      alt="Phone"
      class="navbar__icon"
     />
    </li>
    <li class="navbar__icon-item">
     <img
      src="/src/assets/images/headbar/Combined Shape.svg"
      alt="Notifications"
      class="navbar__icon"
     />
    </li>
    <li class="navbar__icon-item">
     <img
      src="/src/assets/images/headbar/ring.svg"
      alt="Ring"
      class="navbar__icon"
     />
    </li>
    <li class="navbar__icon-item-search">
     <img
      src="/src/assets/images/headbar/search.svg"
      alt="Search"
      class="search_icon-mobile"
     />
    </li>
    <li class="navbar__icon-item">
     <img
      src="/src/assets/images/myImage.png"
      alt="User Avatar"
      class="navbar__avatar"
     />
    </li>
   </ul>
  </div>
 );
}
