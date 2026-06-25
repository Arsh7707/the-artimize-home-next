"use client";
import { useEffect, useRef, useState } from "react";
import { REVIEWS, STARS } from "@/lib/data";
import Reveal from "./Reveal";

const STATS = [
  { n: 12000, label: "Happy Homes" },
  { n: 4500, label: "5-Star Reviews" },
  { n: 320, label: "Curated Pieces" },
  { n: 48, label: "Hrs Avg Dispatch" },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const step = target / 60;
            let cur = 0;
            const tick = () => {
              cur += step;
              if (cur < target) {
                setVal(cur);
                requestAnimationFrame(tick);
              } else setVal(target);
            };
            tick();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const fmt = (n: number) => (n >= 1000 ? Math.round(n).toLocaleString() + "+" : String(Math.round(n)));
  return <span className="stat__num" ref={ref}>{fmt(val)}</span>;
}

export default function Proof() {
  return (
    <section className="section proof">
      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <Counter target={s.n} />
            <label>{s.label}</label>
          </div>
        ))}
      </div>

      <div className="reviews">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.n} className="review" delay={i * 0.08}>
            <div className="review__stars">{STARS}</div>
            <p>&ldquo;{r.t}&rdquo;</p>
            <div className="review__who">
              <span className="review__av">{r.a}</span>
              <span>
                <b>{r.n}</b>
                <span>{r.m}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
