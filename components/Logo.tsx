export default function Logo({ className = "brand__logo" }: { className?: string }) {
  return (
    <span className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logo.jpg"
        alt="The Artmize Home logo"
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", display: "block" }}
      />
    </span>
  );
}
