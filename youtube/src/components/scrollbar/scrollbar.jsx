import "./scrollbar.css";
import {data} from "./mock"


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
