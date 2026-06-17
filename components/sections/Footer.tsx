"use client";

import { Camera, Globe, Mail, MapPin, Phone, Play } from "lucide-react";
import Marquee from "@/components/ui/Marquee";

const columns = [
  {
    title: "Maison",
    links: ["Our Story", "The Atelier", "Sustainability", "Careers", "Press"],
  },
  {
    title: "Shop",
    links: ["New Arrivals", "Collections", "Best Sellers", "Vintage", "Gift Cards"],
  },
  {
    title: "Client Care",
    links: ["Contact", "Shipping", "Returns", "Size Guide", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink text-cream">
      {/* Giant marquee wordmark */}
      <div className="border-y border-cream/10 py-8">
        <Marquee
          speed={40}
          separator={<span className="mx-8 text-gold">✦</span>}
          items={["HOUSE OF BINA", "TIMELESS PIECES", "MODERN HERITAGE"].map(
            (t) => (
              <span
                key={t}
                className="font-cormorant text-5xl font-light tracking-tight text-cream/90 md:text-7xl"
              >
                {t}
              </span>
            )
          )}
        />
      </div>

      <div className="container-luxe py-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="font-cormorant text-2xl tracking-[0.15em]">
              HOUSE OF BINA
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              A vintage luxury fashion house with modern elegance. Handcrafted in
              limited editions, made to be treasured.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cream/60">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" /> 12 Heritage Mall, Lahore
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" /> +92 300 1234567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" /> atelier@houseofbina.com
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-5 text-[11px] uppercase tracking-luxe text-gold">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="hover-underline text-sm text-cream/65 hover:text-cream"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} House of Bina. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Camera, Globe, Play].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex gap-6 text-xs text-cream/40">
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
