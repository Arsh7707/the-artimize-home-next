export default function TopCats() {
  const cats = [
    ["#bestsellers", "New Arrivals"],
    ["#categories", "Sculptures"],
    ["#categories", "Lighting"],
    ["#bestsellers", "Wall Decor"],
    ["#bestsellers", "Kitchen"],
    ["#featured", "Bestsellers"],
    ["#offer", "Sale"],
  ];
  return (
    <div className="topcats">
      <div className="topcats__inner">
        {cats.map(([href, label]) => (
          <a key={label} href={href} className={label === "Sale" ? "sale" : ""}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
