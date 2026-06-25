"use client";
import { useState } from "react";

// Shows an on-brand placeholder if the asset file is missing.
// Drop the real file at `src` and it appears automatically.
export default function SmartImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="ph-box">
        <span>
          {label}
          <br />
          drop {src}
        </span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      className="img-fill"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
