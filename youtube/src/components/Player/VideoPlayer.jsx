import "./VideoPlayer.css";
import ControlsDesktop from "./Controls/ControlsDesktop";
import ProgressBar from "./Controls/ProgressBar";
import VideoDescription from "./VideoDescription/VideoDescription";
import VideoDescriptionMobile from "./VideoDescription/VideoDescriptionMobile";
import ControlsMobile from "./Controls/ControlsMobile";

export default function VideoPlayer() {
 return (
  <>
   <div className="video__player-container">
    <div className="player-container">
      <video
       src="/videos/video.mp4"
       className="video"
      >
      </video>
      <ProgressBar/>
      <ControlsDesktop/>
      <ControlsMobile/>
    </div>

    <VideoDescription />

    <VideoDescriptionMobile />
   </div>
  </>
 );
}
