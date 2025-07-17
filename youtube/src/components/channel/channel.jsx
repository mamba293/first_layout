import "./channel.css";

export default function Channel() {
 return (
  <div class="channel_container">
   <div class="channel_icon-container">
    <img
     src="/src/assets/images/mainContent/icons/food.png"
     alt="channel_icon"
     className="channel_icon"
    />
   </div>
   <div className="channel_description-container">
    <h2 className="name">Food & Drink</h2>
    <p className="date">Published on 14 Jun 2019</p>

    <p className="description">
     A successful marketing plan relies heavily on the pulling-power of
     advertising copy. Writing result-oriented ad copy is difficult, as it must
     appeal to, entice, and convince consumers to take action. There is no magic
     formula to write perfect ad copy; it is based on a number of factors,
     including ad placement, demographic, even the consumer’s mood when they see
     your ad.{" "}
    </p>
    <button className="show_button">Show more</button>
   </div>
   <div className="subscribe_container">
    <button className="subscribe-btn">
        Subscribe 2.3m
    </button>
   </div>
  </div>
 );
}
