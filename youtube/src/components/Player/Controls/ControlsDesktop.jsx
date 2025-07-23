import "./ControlsDesktop.css"

export default function ControlsDesktop() {
 return (
  <div className="controls">
   <div className="controls_pannel-left">
    <div className="controls-play">
     <img
      src="/first_layout/videos/controls/Pause.svg"
      alt="pause"
      className="pause_btn"
     />
    </div>
    <div className="controls-next">
     <img
      src="/first_layout/videos/controls/Next.svg"
      alt="next"
      className="play_next"
     />
    </div>
    <div className="volume_container">
     <img src="/first_layout/videos/controls/Volume.svg" alt="" />
     <input
      type="range"
      className="volume_bar"
      min="0"
      max="100"
      defaultValue="50"
     />
    </div>
   </div>
   <div className="controls_pannel-right">
    <div>
     <img src="/first_layout/videos/controls/Subtitles.svg" alt="" />
    </div>
    <div>
     <img src="/first_layout/videos/controls/Settings.svg" alt="" />
    </div>
    <div>
     <img src="/first_layout/videos/controls/Size.svg" alt="" />
    </div>
    <div>
     <img src="/first_layout/videos/controls/FullScreen.svg" alt="" />
    </div>
   </div>
  </div>
 );
}
