export default function TrustBar() {
  const items = [
    ["✦", "Free Shipping", "On orders over $75"],
    ["↺", "30-Day Returns", "Easy & hassle-free"],
    ["✶", "Handcrafted", "Small-batch artisan quality"],
    ["🔒", "Secure Checkout", "COD & encrypted payments"],
  ];
  return (
    <div className="trustbar">
      <div className="trustbar__inner">
        {items.map(([ic, t, d]) => (
          <div className="trustbar__item" key={t}>
            <i>{ic}</i>
            <span>
              <b>{t}</b> — {d}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
