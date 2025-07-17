export default function VideoPlayer() {
 return (
  <div className="video__player-container">
   
   <video src="/src/assets/videos/video.mp4" width="1363" height="700" controls></video>

   <div className="video__player-description">
    <h1 className="description-name">Dude You Re Getting A Telescope</h1>

    <div className="decription-func-container">
     <p className="description-views">123k views</p>\
     <div className="func-container">
      <button>
       <img src="" alt="" />
       <p></p>
      </button>
      <button>
       <img src="" alt="" />
       <p></p>
      </button>
      <button>
       <img src="" alt="" />
       <p></p>
      </button>
      <button>
       <img src="" alt="" />
      </button>
     </div>
    </div>
   </div>
   
  </div>
 );
}
