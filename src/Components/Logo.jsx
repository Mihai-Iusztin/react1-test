import image from '../assets/trading-img.jpg';
export default function Logo() {
  return (
    <div className="logo">
      <h2>Trading Journal</h2>
      <img src={image} alt="My trading journal" />
    </div>
  );
}
