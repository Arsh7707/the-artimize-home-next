"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MagneticLink from "./MagneticLink";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="brand" aria-label="The Artimize Home home">
          <Logo />
          <span className="brand__name">The Artmize <em>Home</em></span>
        </a>

        <nav className={`nav__links${open ? " open" : ""}`} aria-label="Primary" onClick={() => setOpen(false)}>
          <a href="#categories">Shop</a>
          <a href="#bestsellers">New Arrivals</a>
          <a href="#story">About</a>
          <a href="#faq">Help</a>
        </nav>

        <div className="nav__actions">
          <button className="icon-btn" aria-label="Cart">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            <span className="cart-count" id="cartCount">0</span>
          </button>
          <MagneticLink href="#offer" className="btn btn--gold" event="Shop Now (nav)">Shop Now</MagneticLink>
        </div>

        <button className="nav__burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
