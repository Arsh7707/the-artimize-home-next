"use client";
import { useRef } from "react";
import { track } from "@/lib/track";

export default function MagneticLink({
  href,
  children,
  className = "",
  event,
  name,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  event?: string;
  name?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const onClick = () => {
    if (!event) return;
    if (event === "AddToCart") track("AddToCart", { content_name: name });
    else if (/Shop|Category|Collection|Products/.test(event)) track("ViewContent", { content_name: event });
    else track("Click", { label: event });
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
