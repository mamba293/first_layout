import Header from "/src/components/Header/Heder";
import VideoPlayer from "/src/components/Player/VideoPlayer";
import Channel from "/src/components/channel/channel";
import "./Player.css";
import Scrollbar from "/src/components/Scrollbar/Scrollbar";
import MobileNavbar from "/src/components/NavbarMobile/Navbar";

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
