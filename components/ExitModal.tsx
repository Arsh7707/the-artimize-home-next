"use client";
import { useEffect, useState, FormEvent } from "react";
import Logo from "./Logo";
import { track } from "@/lib/track";

export default function ExitModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reveal = () => {
      if (sessionStorage.getItem("exitShown")) return;
      sessionStorage.setItem("exitShown", "1");
      setShow(true);
      track("ViewContent", { content_name: "Exit Intent Offer" });
    };
    const onOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) reveal();
    };
    document.addEventListener("mouseout", onOut);
    const t = setTimeout(() => {
      if (!sessionStorage.getItem("exitShown") && window.scrollY > 1200) reveal();
    }, 25000);
    return () => {
      document.removeEventListener("mouseout", onOut);
      clearTimeout(t);
    };
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    track("Lead", { content_name: "Exit Intent Offer" });
    setShow(false);
  };

  return (
    <div className={`modal${show ? " show" : ""}`} aria-hidden={!show} onClick={(e) => { if (e.target === e.currentTarget) setShow(false); }}>
      <div className="modal__box">
        <button className="modal__close" aria-label="Close" onClick={() => setShow(false)}>×</button>
        <Logo className="brand__logo brand__logo--lg" />
        <p className="eyebrow">Wait — before you go</p>
        <h3>Here&apos;s <em>10% off</em> your first order</h3>
        <p>Use code <b>ARTIMIZE10</b> at checkout, or grab it by email below.</p>
        <form className="offer__form offer__form--col" onSubmit={onSubmit}>
          <input type="email" placeholder="you@email.com" aria-label="Email" required />
          <button className="btn btn--gold magnetic">Send My Code</button>
        </form>
      </div>
    </div>
  );
}
