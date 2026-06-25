import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Pixels from "@/components/Pixels";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://theartimizehome.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Artmize Home — Timeless Elegance for Every Corner",
  description:
    "The Artmize Home — premium handcrafted home decor: sculptures, artifacts, lighting, wall & kitchen decor. Where artistry adorns your home. Free shipping, easy returns.",
  openGraph: {
    type: "website",
    title: "The Artmize Home — Where artistry adorns your home",
    description:
      "Premium handcrafted decor, sculptures & artifacts. Free shipping. Easy returns. 10% off your first order.",
    images: ["/assets/featured-peacock.png"],
  },
  twitter: { card: "summary_large_image" },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Artmize Home",
  description: "Premium handcrafted home decor — sculptures, artifacts, lighting, wall and kitchen decor.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.jpg`,
  sameAs: ["https://www.instagram.com/theartmizehome/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Pixels />
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </body>
    </html>
  );
}
