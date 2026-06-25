export default function Announce() {
  const items = [
    <>✦ Free shipping on orders over $75</>,
    <>✦ 10% off your first order — code <b>ARTIMIZE10</b></>,
    <>✦ Handcrafted artifacts, curated for your home</>,
    <>✦ Easy 30-day returns</>,
  ];
  return (
    <div className="announce">
      <div className="announce__track">
        {[...items, ...items].map((it, i) => (
          <span key={i}>{it}</span>
        ))}
      </div>
    </div>
  );
}
