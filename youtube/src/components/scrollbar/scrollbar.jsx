import "./scrollbar.css";

const data = [
 {
  image: "/src/assets/images/mainContent/food/food1.png",
  timer: "7:36",
  title: "Astronomy Or Astrology",
  views: "240k views",
  author: "Food & Drink",
 },
 {
  image: "/src/assets/images/mainContent/food/food2.png",
  timer: "2:19",
  title: "Advertising Outdoors",
  views: "13k views",
  author: "Food & Drink",
 },
 {
  image: "/src/assets/images/mainContent/food/food3.png",
  timer: "9:05",
  title: "Radio Astronomy",
  views: "1k views",
  author: "Food & Drink",
 },
 {
  image: "/src/assets/images/mainContent/food/food4.png",
  timer: "3:40",
  title: "A Good Autoresponder",
  views: "45k views",
  author: "Food & Drink",
 },
 {
  image: "/src/assets/images/mainContent/food/food5.png",
  timer: "1:56",
  title: "Baby Monitor Technology",
  views: "86k views",
  author: "Food & Drink",
 },
 {
  image: "/src/assets/images/mainContent/food/food6.png",
  timer: "4:15",
  title: "Asteroids",
  views: "123kg views",
  author: "Food & Drink",
 },
];

export default function Scrollbar() {
 return (
  <div className="scroll-container">
   <div className="scroll-header">
    <h3>Next</h3>
    <div className="autoplay-container">
     <span className="autoplay-text">AUTOPLAY</span>
     <label className="autoplay-toggle">
      <input type="checkbox" />
      <span className="toggle-slider round"></span>
     </label>
    </div>
   </div>

   <div className="scroll-content">
    {data.map((item, index) => (
     <div key={index} className="scroll-item">
      <div className="item-image-container">
       <img src={item.image} alt={item.title} className="item-image" />
       <p className="item-timer">{item.timer}</p>
      </div>
      <div className="item-details">
       <h4 className="item-title">{item.title}</h4>
       <div className="item-meta">
        <span className="item-views">{item.views}</span>
        <span className="item-author">{item.author}</span>
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}
