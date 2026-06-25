"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  { q: "How long does shipping take?", a: "Orders are dispatched within 24–48 hours. Standard delivery is 3–6 business days, with free shipping on orders over $75." },
  { q: "What is your return policy?", a: "We offer easy 30-day returns. If a piece isn't right for your space, send it back for a full refund or exchange." },
  { q: "What materials are your artifacts made from?", a: "Our pieces are handcrafted from premium ceramics, solid wood, brass, glass and natural fibers — each listing details its exact materials and care." },
  { q: "How do I care for handcrafted pieces?", a: "Dust gently with a soft, dry cloth. Avoid harsh chemicals. Detailed care notes are included with every order." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq">
      <Reveal className="section__head">
        <p className="eyebrow">Help Center</p>
        <h2>Questions, answered</h2>
      </Reveal>
      <div className="acc">
        {FAQS.map((f, i) => (
          <div className={`acc__item${open === i ? " open" : ""}`} key={f.q}>
            <button className="acc__q" onClick={() => setOpen(open === i ? null : i)}>
              {f.q}<span>+</span>
            </button>
            <div className="acc__a" style={{ maxHeight: open === i ? "240px" : 0 }}>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
