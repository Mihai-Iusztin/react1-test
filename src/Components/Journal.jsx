import img1 from '../assets/trading-img1.jpg';
import img2 from '../assets/trading-img2.jpg';

export default function Journal() {
  return (
    <div className="journal">
      <div className="journal-img">
        <img src={img1} alt="Your journal" />
      </div>
      <div className="journal-img">
        <h3>Keep record all your trades!</h3>
      </div>
      <div className="journal-img">
        <img src={img2} alt="Your journal" />
      </div>
    </div>
  );
}
