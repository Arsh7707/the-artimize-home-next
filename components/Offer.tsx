"use client";
import { useEffect, useState, FormEvent } from "react";
import Reveal from "./Reveal";
import { track } from "@/lib/track";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Offer() {
  const [time, setTime] = useState({ h: "00", m: "00", s: "00" });
  const [note, setNote] = useState("No spam. Unsubscribe anytime.");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const diff = end.getTime() - now.getTime();
      setTime({
        h: pad(Math.floor(diff / 3.6e6)),
        m: pad(Math.floor((diff % 3.6e6) / 6e4)),
        s: pad(Math.floor((diff % 6e4) / 1e3)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value || "";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setNote("Please enter a valid email.");
      return;
    }
    track("Lead", { content_name: "Welcome 10% offer" });
    setNote("✓ Check your inbox — code ARTIMIZE10 is on its way!");
    e.currentTarget.reset();
  };

  return (
    <section className="section offer" id="offer">
      <Reveal className="offer__card">
        <p className="eyebrow">Limited-time welcome offer</p>
        <h2>Get <em>10% off</em> your first order</h2>
        <p className="offer__sub">Join 12,000+ homes. Drop your email or WhatsApp and we&apos;ll send your code instantly.</p>

        <div className="countdown" aria-label="Offer countdown">
          <div><b>{time.h}</b><span>hrs</span></div>
          <div><b>{time.m}</b><span>min</span></div>
          <div><b>{time.s}</b><span>sec</span></div>
        </div>

        <form className="offer__form" onSubmit={onSubmit} noValidate>
          <input type="email" name="email" placeholder="you@email.com" aria-label="Email" />
          <input type="tel" name="phone" placeholder="WhatsApp number" aria-label="WhatsApp number" />
          <button type="submit" className="btn btn--gold magnetic">Get My 10% Off</button>
        </form>
        <p className="offer__note">{note}</p>
      </Reveal>
    </section>
  );
}
