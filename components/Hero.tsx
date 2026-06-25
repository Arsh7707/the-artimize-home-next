"use client";
import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import MagneticLink from "./MagneticLink";
import { TAGLINE } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease }}>
            Premium Home Decor · Handcrafted Artifacts
          </motion.p>
          <h1 className="hero__title">
            <span style={{ display: "block", overflow: "hidden" }}>
              <motion.span style={{ display: "inline-block" }} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.12, ease }}>
                Timeless Elegance
              </motion.span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <motion.span style={{ display: "inline-block" }} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.24, ease }}>
                for <em>Every Corner</em>
              </motion.span>
            </span>
          </h1>
          <motion.p className="hero__sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease }}>
            {TAGLINE} Curated wall decor, lamps, ceramics & handcrafted sculptures that turn your house into a gallery.
          </motion.p>
          <motion.div className="hero__cta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.52, ease }}>
            <MagneticLink href="#bestsellers" className="btn btn--gold btn--lg" event="Shop the Collection">Shop the Collection</MagneticLink>
            <a href="#featured" className="btn btn--ghost btn--lg">Shop Bestsellers</a>
          </motion.div>
          <motion.div className="hero__rating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7, ease }}>
            <span className="hero__stars">★★★★★</span>
            <span><b>12,000+</b> happy homes · Free shipping $75+ · Easy returns</span>
          </motion.div>
        </div>

        <motion.div className="hero__media" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease }}>
          <div className="hero__ring" aria-hidden="true" />
          <SmartImage src="/assets/hero.jpg" alt="The Artmize Home — handcrafted decor styled at home" label="Hero · styled decor" />
          <div className="hero__float">
            <b>Best-seller of the week</b>
            <span>Loved by 12,000+ homes — limited artisan stock</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
