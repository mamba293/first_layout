import Header from "../components/header/Heder";
import VideoPlayer from "../components/Player/VideoPlayer";
import Channel from "../components/channel/channel";
import "./palyer.css";
import Scrollbar from "../components/scrollbar/scrollbar";

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
