import "./VideoDescriptionMobile.css"

export default function VideoDescriptionMobile() {
 return (
  <div className="video__player-description-mobile">
   <div className="header_description-mobile">
    <div className="left_container-mobile">
     <h1 className="description-name-mobile">
      Dude You Re Getting A Telescope
     </h1>
     <p className="description-views-mobile">123k views</p>
    </div>
    <div className="chewron_container">
     <button>
      <img
       src="/src/assets/images/sidebar/RightArrowBlack.svg"
       alt="arrow-down"
       class="arrow_img"
      />
     </button>
    </div>
   </div>
   <div className="scroll_functional_container">
    <button className="func-container-button-mobile">
     <img src="src/assets/images/functional-icons/like.svg" alt="like" />
     <p>123k</p>
    </button>
    <button className="func-container-button-mobile">
     <img src="src/assets/images/functional-icons/dislike.svg" alt="dislike" />
     <p>435k</p>
    </button>
    <button className="func-container-button-mobile">
     <img src="src/assets/images/functional-icons/share.svg" alt="share" />
     <p>Share</p>
    </button>
   </div>
  </div>
 );
}
