import "./VideoDescription.css"

export default function VideoDescription() {
 return (
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
 );
}
