import "./ProgressBar.css"

export default function ProgressBar() {
 return (
  <div className="progress-wrapper">
   <div className="progress-times">
    <p>1:34</p>
    <p>19:00</p>
   </div>
   <div className="progress-overlay">
    <div className="progress-bar"></div>
   </div>
  </div>
 );
}
