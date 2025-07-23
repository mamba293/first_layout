import "./VideoPlayer.css";
import ControlsDesktop from "./Controls/ControlsDesktop";
import ProgressBar from "./Controls/ProgressBar";
import VideoDescription from "./VideoDescription/VideoDescription";
import VideoDescriptionMobile from "./VideoDescription/VideoDescriptionMobile";

export default function VideoPlayer() {
 return (
  <>
   <div className="video__player-container">
    <div className="player-container">
      <video
       src="/src/assets/videos/video.mp4"
       className="video"
      >
      </video>
      <ProgressBar/>
      <ControlsDesktop/>
    </div>

    {/* <VideoDescription />

    <VideoDescriptionMobile /> */}
   </div>
  </>
 );
}
