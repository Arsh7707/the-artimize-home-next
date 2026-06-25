import { CATEGORIES } from "@/lib/data";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

export default function Categories() {
  return (
    <section className="section categories" id="categories">
      <Reveal className="section__head">
        <p className="eyebrow">Shop by Space</p>
        <h2>Find your corner</h2>
      </Reveal>
      <div className="cat-grid">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <Tilt className="cat-card tilt" href="#bestsellers">
              <div className="cat-card__img">
                <SmartImage src={c.img} alt={`${c.title} collection`} label={c.title} />
              </div>
              <div className="cat-card__body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="link-arrow">{c.cta} →</span>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
