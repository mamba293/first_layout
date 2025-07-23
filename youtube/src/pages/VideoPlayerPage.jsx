import Header from "../components/Header/Heder";
import VideoPlayer from "../components/Player/VideoPlayer";
import Channel from "../components/channel/channel";
import "./Player.css";
import Scrollbar from "../components/Scrollbar/Scrollbar";
import MobileNavbar from "../components/NavbarMobile/Navbar";

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
