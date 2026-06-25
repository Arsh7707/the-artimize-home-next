import Reveal from "./Reveal";

const VALUES = [
  { ic: "✶", t: "Handcrafted", d: "Artisan-made, small batches" },
  { ic: "◆", t: "Premium Quality", d: "Built to last, made to love" },
  { ic: "➜", t: "Fast Shipping", d: "Dispatched in 24–48h" },
  { ic: "↺", t: "Easy Returns", d: "30-day, no questions" },
  { ic: "🔒", t: "Secure Payments", d: "COD & encrypted checkout" },
];

export default function Values() {
  return (
    <section className="section values">
      {VALUES.map((v, i) => (
        <Reveal key={v.t} className="value" delay={i * 0.05}>
          <div className="value__ic">{v.ic}</div>
          <h4>{v.t}</h4>
          <p>{v.d}</p>
        </Reveal>
      ))}
    </section>
  );
}
