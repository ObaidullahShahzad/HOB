"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { megaMenu, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [top, setTop] = useState(38);

  useEffect(() => {
    const BAR = 38; // announcement bar height
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setTop(Math.max(0, BAR - y));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || hovered;

  return (
    <>
      <motion.header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          solid ? "glass border-b border-accent/15" : "bg-transparent"
        )}
        style={{ top }}
      >
        <nav className="container-luxe flex items-center justify-between py-4">
          {/* Left — desktop links */}
          <ul className="hidden flex-1 items-center gap-7 lg:flex">
            {navLinks.slice(0, 4).map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={cn(
                    "hover-underline text-[12px] uppercase tracking-[0.18em] transition-colors",
                    solid ? "text-ink" : "text-cream"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu trigger */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "lg:hidden",
              solid ? "text-ink" : "text-cream"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Center — logo */}
          <a
            href="#home"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 text-center transition-colors",
              solid ? "text-ink" : "text-cream"
            )}
          >
            <span className="block font-cormorant text-xl font-medium leading-none tracking-[0.18em] md:text-2xl">
              HOUSE OF BINA
            </span>
            <span className="mt-0.5 block text-[7px] uppercase tracking-[0.5em] text-accent md:text-[8px]">
              Maison de Couture
            </span>
          </a>

          {/* Right — actions */}
          <div className="flex flex-1 items-center justify-end gap-5">
            {navLinks.slice(4).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={cn(
                  "hover-underline hidden text-[12px] uppercase tracking-[0.18em] xl:inline-block",
                  solid ? "text-ink" : "text-cream"
                )}
              >
                {l.label}
              </a>
            ))}
            {[Search, Heart, User, ShoppingBag].map((Icon, i) => (
              <button
                key={i}
                aria-label="action"
                className={cn(
                  "transition-transform duration-300 hover:scale-110 hover:text-gold",
                  solid ? "text-ink" : "text-cream"
                )}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} />
              </button>
            ))}
          </div>
        </nav>

        {/* Mega menu */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="hidden overflow-hidden border-t border-accent/15 lg:block"
            >
              <div className="container-luxe grid grid-cols-4 gap-10 py-10">
                {Object.entries(megaMenu).map(([group, items], gi) => (
                  <div key={group}>
                    <p className="mb-4 text-[11px] uppercase tracking-luxe text-accent">
                      {group}
                    </p>
                    <ul className="space-y-2.5">
                      {items.map((item, ii) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * (gi + ii) }}
                        >
                          <a
                            href="#collections"
                            className="hover-underline text-[15px] font-light text-ink/80 hover:text-ink"
                          >
                            {item}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-6 text-cream lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-cormorant text-xl tracking-[0.18em]">
                HOUSE OF BINA
              </span>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="mt-16 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-cormorant text-4xl font-light"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex gap-6 pt-8 text-cream/60">
              <Search className="h-5 w-5" />
              <Heart className="h-5 w-5" />
              <User className="h-5 w-5" />
              <ShoppingBag className="h-5 w-5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
