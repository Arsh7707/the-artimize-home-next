import { Fragment } from "react";

export default function Marquee() {
  const words = ["Handcrafted", "Wall Art", "Ceramics", "Artifacts", "Kitchen Decor", "Curated"];
  const loop = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((w, i) => (
          <Fragment key={i}>
            <span>{w}</span>
            <i>✦</i>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
