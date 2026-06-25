export type Product = {
  name: string;
  price: number;
  was?: number;
  badge: string;
  ph: string;
  img?: string;
};

// `img` overrides the default `/assets/product-N.jpg` slot when a real photo exists.
// Real photos in place: peacock + deer. Drop the others at the listed paths and
// they appear automatically (e.g. /assets/product-horses.jpg).
export const PRODUCTS: Product[] = [
  { name: "Royal Peacock Sculpture", price: 149, was: 199, badge: "Bestseller", ph: "Peacock sculpture", img: "/assets/featured-peacock.png" },
  { name: "Eight Mystic Horses", price: 129, was: 169, badge: "Bestseller", ph: "8 horses sculpture", img: "/assets/product-horses.jpg" },
  { name: "Golden Elephant Duo", price: 89, was: 119, badge: "Limited", ph: "Gold elephant pair", img: "/assets/product-elephants.jpg" },
  { name: "Reading Girl Ring Lamp", price: 79, was: 99, badge: "Bestseller", ph: "Girl ring lamp", img: "/assets/product-girllamp.jpg" },
  { name: "Bespectacled Giraffe Bust", price: 69, badge: "New", ph: "Giraffe bust", img: "/assets/product-giraffe.jpg" },
  { name: "Deer Glow LED Lamp", price: 39, badge: "New", ph: "Deer LED lamp", img: "/assets/product-deer.jpg" },
  { name: "Astronaut Catch-All Tray", price: 74, badge: "Limited", ph: "Astronaut tray", img: "/assets/product-astronaut.jpg" },
];

export type Review = { t: string; n: string; m: string; a: string };

export const REVIEWS: Review[] = [
  { t: "The wall mirror completely transformed my entryway. Quality is unreal for the price.", n: "Priya S.", m: "Verified Buyer", a: "P" },
  { t: "Every piece feels handpicked and special. My kitchen finally looks like the Pinterest boards.", n: "Daniel R.", m: "Verified Buyer", a: "D" },
  { t: "Fast shipping, gorgeous packaging, and the artifacts are even better in person.", n: "Aisha K.", m: "Verified Buyer", a: "A" },
];

export const CATEGORIES = [
  { title: "Sculptures & Artifacts", desc: "Handcrafted statement centerpieces", cta: "Shop Artifacts", ph: "Sculptures", img: "/assets/featured-peacock.png" },
  { title: "Lighting & Lamps", desc: "Warm, characterful accent lighting", cta: "Shop Lighting", ph: "Lighting", img: "/assets/product-girllamp.jpg" },
  { title: "Animals & Figurines", desc: "Lucky elephants, horses & more", cta: "Shop Figurines", ph: "Animals & figurines", img: "/assets/product-elephants.jpg" },
];

export const STARS = "★★★★★";
