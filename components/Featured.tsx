import SmartImage from "./SmartImage";
import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";

export default function Featured() {
  return (
    <section className="featured" id="featured">
      <div className="featured__inner">
        <Reveal className="featured__media">
          <SmartImage src="/assets/featured-peacock.png" alt="Royal Peacock handcrafted sculpture by The Artmize Home" label="Featured · Royal Peacock" />
        </Reveal>
        <Reveal className="featured__body" delay={0.1}>
          <p className="eyebrow">Featured Collection</p>
          <h2>The Royal Peacock</h2>
          <p>
            A hand-painted statement sculpture where artistry meets craft — intricate jeweled plumage finished in
            emerald and gold. The kind of piece guests notice the moment they walk in.
          </p>
          <ul className="featured__list">
            <li>Premium craftsmanship, hand-finished detailing</li>
            <li>Perfect for every space — shelf, console or mantel</li>
            <li>A thoughtful, gift-worthy centerpiece</li>
          </ul>
          <MagneticLink href="#bestsellers" className="btn btn--gold btn--lg" event="Shop Featured Peacock">
            Shop the Peacock
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}
