import "./VideoPlayer.css";
import ControlsDesktop from "./Controls/ControlsDesktop";
import ProgressBar from "./Controls/ProgressBar";
import Video from "./Video/Video";
import VideoDescription from "./VideoDescription/VideoDescription";
import VideoDescriptionMobile from "./VideoDescription/VideoDescriptionMobile";

export default function VideoPlayer() {
 return (
  <>
   <div className="video__player-container">
    <div className="player-container">
     <Video />
     <ProgressBar />
     <ControlsDesktop />
    </div>

    <VideoDescription />
    
    <VideoDescriptionMobile/>
    
   </div>
  </>
 );
}
