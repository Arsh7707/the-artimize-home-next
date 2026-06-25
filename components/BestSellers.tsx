"use client";
import { PRODUCTS, STARS } from "@/lib/data";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";
import { track } from "@/lib/track";

export default function BestSellers() {
  const addToCart = (name: string) => {
    track("AddToCart", { content_name: name });
    const el = document.getElementById("cartCount");
    if (el) el.textContent = String((parseInt(el.textContent || "0", 10) || 0) + 1);
  };

  return (
    <section className="section bestsellers" id="bestsellers">
      <Reveal className="section__head">
        <p className="eyebrow">Loved by 12,000+ homes</p>
        <h2>Best-sellers this week</h2>
        <p className="section__sub">Selling fast — limited stock on artisan runs.</p>
      </Reveal>

      <div className="prod-grid">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 0.06}>
            <article className="prod">
              <div className="prod__img">
                <span className="prod__badge">{p.badge}</span>
                <SmartImage src={p.img ?? `/assets/product-${i + 1}.jpg`} alt={p.name} label={p.ph} />
                <button className="prod__add" onClick={() => addToCart(p.name)}>
                  Quick Add — ${p.price}
                </button>
              </div>
              <div className="prod__body">
                <div className="prod__stars">
                  {STARS} <span style={{ color: "var(--ivory-dim)" }}>({120 + i * 7})</span>
                </div>
                <div className="prod__name">{p.name}</div>
                <div className="prod__price">
                  ${p.price}
                  {p.was ? <s>${p.was}</s> : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="center">
        <MagneticLink href="#offer" className="btn btn--gold btn--lg" event="View All Products">
          View All Products
        </MagneticLink>
      </div>
    </section>
  );
}
