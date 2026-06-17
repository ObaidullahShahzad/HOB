"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, ProductTag } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const filters: (ProductTag | "All")[] = [
  "All",
  "New",
  "Luxury",
  "Vintage",
  "Signature",
];

export default function NewArrivals() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter((p) => p.tags.includes(active as ProductTag));
  }, [active]);

  return (
    <section id="new-arrivals" className="bg-vintage py-section">
      <div className="container-luxe">
        <div className="mb-12 flex flex-col items-center gap-8 text-center">
          <SectionHeading
            align="center"
            eyebrow="Just Landed"
            title="New Arrivals"
            description="The latest expressions from the atelier — filter the edit to your taste."
          />

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-colors",
                  active === f ? "text-cream" : "text-ink-soft/70 hover:text-ink"
                )}
              >
                {active === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 z-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
