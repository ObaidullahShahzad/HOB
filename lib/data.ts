/* ============================================================
   HOUSE OF BINA — Mock Catalogue Data
   Imagery: curated editorial fashion photography (Unsplash)
   ============================================================ */

export type ProductTag = "New" | "Luxury" | "Vintage" | "Signature";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage: string;
  tags: ProductTag[];
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  pieces: string;
  image: string;
  span: "tall" | "wide" | "regular";
}

export const announcements = [
  "New Collection — Spring / Summer 2026",
  "Complimentary Worldwide Shipping",
  "The Summer Drop Has Landed",
  "Limited Edition Heritage Pieces",
  "Book a Private Atelier Appointment",
];

export const collections: Collection[] = [
  {
    id: "vintage-classics",
    title: "Vintage Classics",
    subtitle: "Reimagined heritage silhouettes",
    pieces: "24 Pieces",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    span: "tall",
  },
  {
    id: "summer-collection",
    title: "Summer Collection",
    subtitle: "Lightweight luxury for warm days",
    pieces: "32 Pieces",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    span: "regular",
  },
  {
    id: "luxury-pret",
    title: "Luxury Prêt",
    subtitle: "Ready-to-wear, impeccably tailored",
    pieces: "18 Pieces",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
    span: "regular",
  },
  {
    id: "signature-pieces",
    title: "Signature Pieces",
    subtitle: "The icons of the house",
    pieces: "12 Pieces",
    image:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=1200&q=80",
    span: "regular",
  },
  {
    id: "evening-couture",
    title: "Evening Couture",
    subtitle: "Gowns for the unforgettable hours",
    pieces: "16 Pieces",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1200&q=80",
    span: "regular",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Bina Heritage Trench",
    category: "Outerwear",
    price: 48000,
    originalPrice: 62000,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=900&q=80",
    tags: ["Signature", "Luxury"],
  },
  {
    id: "p2",
    name: "Soirée Silk Gown",
    category: "Evening",
    price: 86000,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=80",
    tags: ["New", "Luxury"],
  },
  {
    id: "p3",
    name: "Vintage Linen Set",
    category: "Prêt",
    price: 32000,
    originalPrice: 41000,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    tags: ["Vintage", "New"],
  },
  {
    id: "p4",
    name: "Atelier Wool Coat",
    category: "Outerwear",
    price: 72000,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
    tags: ["Signature", "Luxury"],
  },
  {
    id: "p5",
    name: "Golden Hour Dress",
    category: "Day",
    price: 39000,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    tags: ["New"],
  },
  {
    id: "p6",
    name: "Heritage Cashmere Knit",
    category: "Knitwear",
    price: 28000,
    originalPrice: 35000,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
    tags: ["Vintage", "Luxury"],
  },
  {
    id: "p7",
    name: "Maison Tailored Blazer",
    category: "Prêt",
    price: 54000,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=900&q=80",
    tags: ["Signature", "New"],
  },
  {
    id: "p8",
    name: "Crème Pleated Skirt",
    category: "Day",
    price: 24000,
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
    tags: ["Vintage"],
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "House of Bina dresses me the way heirlooms are passed down — with intention, story, and a quiet kind of grandeur.",
    author: "Amara Khan",
    role: "Editor-in-Chief, Atelier Monthly",
  },
  {
    id: "t2",
    quote:
      "Every seam feels considered. It is rare to find a house that treats vintage not as nostalgia, but as living craft.",
    author: "Liana Moretti",
    role: "Creative Consultant",
  },
  {
    id: "t3",
    quote:
      "The trench arrived wrapped like a love letter. I have never felt more myself than in a House of Bina piece.",
    author: "Saira Daniyal",
    role: "Patron of the House",
  },
];

export const journalEntries = [
  {
    id: "j1",
    title: "The Art of Slow Fashion",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "j2",
    title: "Inside the Bina Atelier",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "j3",
    title: "Heritage in Every Thread",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80",
  },
];

export const instagramImages = [
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Women", href: "#new-arrivals" },
  { label: "Men", href: "#new-arrivals" },
  { label: "Vintage", href: "#story" },
  { label: "About", href: "#brand-story" },
  { label: "Journal", href: "#campaign" },
  { label: "Contact", href: "#footer" },
];

export const megaMenu = {
  Collections: [
    "Vintage Classics",
    "Summer Collection",
    "Luxury Prêt",
    "Signature Pieces",
    "Bridal Heritage",
  ],
  "The House": [
    "Our Story",
    "The Atelier",
    "Sustainability",
    "Craftsmanship",
    "Editorial Journal",
  ],
  Featured: ["New Arrivals", "Best Sellers", "Last Chance", "Gift Cards"],
};
