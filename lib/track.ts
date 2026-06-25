// Performance-marketing event helper.
// Paste your pixel IDs in components/Pixels.tsx to activate.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, data?: Record<string, unknown>) => void };
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (window.fbq) window.fbq("track", event, data);
  if (window.dataLayer) window.dataLayer.push({ event, ...data });
  if (window.ttq) window.ttq.track(event, data);
  // eslint-disable-next-line no-console
  console.log("[track]", event, data);
}
