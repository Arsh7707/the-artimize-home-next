import SmartImage from "./SmartImage";
import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";

export default function Story() {
  return (
    <section className="section story" id="story">
      <Reveal className="story__media">
        <SmartImage src="/assets/lifestyle.png" alt="Styled interior featuring The Artmize Home pieces" label="Lifestyle · styled room" />
      </Reveal>
      <Reveal className="story__body" delay={0.1}>
        <p className="eyebrow">Our Story</p>
        <h2>Handpicked artifacts to make every corner art</h2>
        <p>
          The Artimize Home began with a simple belief: a home should feel like a gallery you get to live in.
          We travel, source, and curate handcrafted pieces — each one chosen for warmth, character and craft —
          so styling your space feels effortless and personal.
        </p>
        <ul className="story__points">
          <li>Curated by designers, not algorithms</li>
          <li>Small-batch, artisan-made quality</li>
          <li>Pieces that work together, room to room</li>
        </ul>
        <MagneticLink href="#categories" className="btn btn--ghost" event="Explore Collection (story)">
          Explore the Collection →
        </MagneticLink>
      </Reveal>
    </section>
  );
}
