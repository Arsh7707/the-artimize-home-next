"use client";
import { FormEvent } from "react";
import Logo from "./Logo";
import { track } from "@/lib/track";
import { IG_URL } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    track("Lead", { content_name: "Newsletter" });
    e.currentTarget.reset();
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <a href="#top" className="brand">
            <Logo className="brand__logo brand__logo--sm" />
            <span className="brand__name">The Artmize <em>Home</em></span>
          </a>
          <p>Where artistry adorns your home. Curated artifacts &amp; decor to make every corner feel like art.</p>
          <form className="news" onSubmit={onSubmit}>
            <input type="email" placeholder="Email for new drops & offers" aria-label="Newsletter email" />
            <button className="btn btn--gold">Join</button>
          </form>
        </div>
        <div className="footer__cols">
          <div>
            <h5>Shop</h5>
            <a href="#bestsellers">Wall Decor</a><a href="#bestsellers">Kitchen Decor</a><a href="#bestsellers">Artifacts</a><a href="#bestsellers">New Arrivals</a>
          </div>
          <div>
            <h5>Help</h5>
            <a href="#faq">Shipping</a><a href="#faq">Returns</a><a href="#faq">Care Guide</a><a href="#offer">Contact</a>
          </div>
          <div>
            <h5>Brand</h5>
            <a href="#story">Our Story</a><a href="#story">Sustainability</a><a href="#">Trade Program</a><a href="#">Gift Cards</a>
          </div>
          <div>
            <h5>Follow</h5>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#instagram">Our Feed</a>
            <a href="#">Pinterest</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="footer__bot">
        <span>© {year} The Artimize Home. All rights reserved.</span>
        <span className="pay">VISA · Mastercard · Amex · PayPal · COD</span>
      </div>
    </footer>
  );
}
