import Header from "/src/components/Header/Heder.jsx";
import VideoPlayer from "/src/components/Player/VideoPlayer";
import Channel from "/src/components/Channel/Channel.jsx";
import "./Player.css";
import Scrollbar from "/src/components/Scrollbar/Scrollbar.jsx";
import MobileNavbar from "/src/components/NavbarMobile/Navbar.jsx";

export default function VideoPlayerPage() {
 return (
  <>
  <Header />
  <main className="main_content">
    <div className="content_area">
      <VideoPlayer />
      <Channel />
      <MobileNavbar/>
    </div>
    <Scrollbar />
  </main>
  
</>
 );
}
