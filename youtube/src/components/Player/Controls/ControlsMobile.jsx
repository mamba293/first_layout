import "./ControlsMobile.css"

export default function ControlsMobile() {
 return (
  <div className="controls_mobile">
   <img src="/first_layout/videos/controls/Pause.svg" alt="pause" />
   <span>1:34</span>

   <div className="progress_line">
    <div className="progress_fill" style={{ width: "20%" }}></div>
   </div>

   <span>10:00</span>
   <img src="/first_layout/videos/controls/Volume.svg" alt="volume" />
  </div>
 );
}
