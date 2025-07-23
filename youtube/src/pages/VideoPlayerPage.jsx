import Header from "../components/Header/Heder";
import VideoPlayer from "../components/Player/VideoPlayer";
import Channel from "../components/channel/channel";
import "./Player.css";
import Scrollbar from "../components/Scrollbar/Scrollbar";

export default function VideoPlayerPage() {
 return (
  <>
  <Header />
  <main className="main_content">
    <div className="content_area">
      <VideoPlayer />
      <Channel />
    </div>
    <Scrollbar />
  </main>
  
</>
 );
}
