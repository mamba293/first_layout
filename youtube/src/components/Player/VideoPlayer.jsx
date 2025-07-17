import "./VideoPlayer.css";

export default function VideoPlayer() {
 return (
  <div className="video__player-container">
   <div className="player-container">
    <video
     src="/src/assets/videos/video.mp4"
     className="video"
     width="1363"
     height="700"
    ></video>

    <div className="progress-wrapper">
     <div className="progress-times">
      <p>1:34</p>
      <p>19:00</p>
     </div>
     <div className="progress-overlay">
      <div className="progress-bar"></div>
     </div>
    </div>

    <div className="controls">
     <div className="controls_pannel-left">
      <div className="controls-play">
       <img
        src="/src/assets/videos/controls/Pause.svg"
        alt="pause"
        className="pause_btn"
       />
      </div>
      <div className="controls-next">
       <img
        src="/src/assets/videos/controls/Next.svg"
        alt="next"
        className="play_next"
       />
      </div>
      <div className="volume_container">
       <img src="/src/assets/videos/controls/Volume.svg" alt="" />
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
       <img src="/src/assets/videos/controls/Subtitles.svg" alt="" />
      </div>
      <div>
       <img src="/src/assets/videos/controls/Settings.svg" alt="" />
      </div>
      <div>
       <img src="/src/assets/videos/controls/Size.svg" alt="" />
      </div>
      <div>
       <img src="/src/assets/videos/controls/FullScreen.svg" alt="" />
      </div>
     </div>
    </div>
   </div>

   <div className="video__player-description">
    <h1 className="description-name">Dude You Re Getting A Telescope</h1>

    <div className="decription-func-container">
     <p className="description-views">123k views</p>
     <div className="func-container">
      <button className="func-container-button">
       <img src="/src/assets/images/functional-icons/like.svg" alt="like" />
       <p>123k</p>
      </button>
      <button className="func-container-button">
       <img
        src="/src/assets/images/functional-icons/dislike.svg"
        alt="dislike"
       />
       <p>435k</p>
      </button>
      <button className="func-container-button">
       <img src="/src/assets/images/functional-icons/share.svg" alt="share" />
       <p>Share</p>
      </button>
      <button className="dots_button">
       <img
        src="/src/assets/images/functional-icons/more.svg"
        alt="more"
        className="more-button"
       />
      </button>
     </div>
    </div>
   </div>
  </div>
 );
}
