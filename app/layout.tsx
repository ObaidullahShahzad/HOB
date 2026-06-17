import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  Inter,
  Manrope,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://houseofbina.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HOUSE OF BINA — Timeless Pieces. Modern Heritage.",
    template: "%s · HOUSE OF BINA",
  },
  description:
    "A vintage luxury fashion house with modern elegance. Discover timeless, editorial, handcrafted pieces from House of Bina.",
  keywords: [
    "luxury fashion",
    "vintage clothing",
    "House of Bina",
    "editorial fashion",
    "prêt couture",
    "heritage fashion",
  ],
  authors: [{ name: "House of Bina" }],
  openGraph: {
    title: "HOUSE OF BINA — Timeless Pieces. Modern Heritage.",
    description:
      "A vintage luxury fashion house with modern elegance. Timeless, editorial, handcrafted.",
    url: SITE_URL,
    siteName: "House of Bina",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "House of Bina luxury fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOUSE OF BINA — Timeless Pieces. Modern Heritage.",
    description: "A vintage luxury fashion house with modern elegance.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "House of Bina",
  description:
    "A vintage luxury fashion house with modern elegance.",
  url: SITE_URL,
  brand: { "@type": "Brand", name: "House of Bina" },
  priceRange: "$$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${manrope.variable} antialiased`}
    >
      <body className="grain bg-vintage text-ink-soft">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
