import SmartImage from "./SmartImage";
import Reveal from "./Reveal";
import { IG_HANDLE, IG_URL } from "@/lib/site";

export default function InstaFeed() {
  const tiles = [1, 2, 3, 4, 5, 6];
  return (
    <section className="section insta" id="instagram">
      <Reveal className="section__head">
        <p className="eyebrow">As seen on Instagram</p>
        <h2>Follow {IG_HANDLE}</h2>
        <p className="section__sub">Real homes, styled with The Artimize Home. Tag us to get featured.</p>
      </Reveal>

      <div className="insta-grid">
        {tiles.map((n, i) => (
          <Reveal key={n} delay={(i % 6) * 0.05}>
            <a className="insta-tile" href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label={`View post ${n} on Instagram`}>
              <SmartImage src={`/assets/insta-${n}.jpg`} alt={`Instagram post ${n}`} label={`IG post ${n}`} />
              <span className="insta-tile__ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="center">
        <a className="btn btn--gold btn--lg magnetic" href={IG_URL} target="_blank" rel="noopener noreferrer">
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
