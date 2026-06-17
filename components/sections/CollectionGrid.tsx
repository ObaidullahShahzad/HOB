"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const spanMap: Record<string, string> = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  regular: "",
};

export default function CollectionGrid() {
  return (
    <section id="collections" className="bg-vintage py-section">
      <div className="container-luxe">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The Collections"
            title="Curated Worlds of Wear"
            description="Four houses of expression, each a study in heritage, fabric, and the quiet confidence of timeless design."
          />
          <a
            href="#new-arrivals"
            className="hover-underline text-[12px] uppercase tracking-[0.2em] text-accent"
          >
            View All Collections
          </a>
        </div>

        <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[320px]">
          {collections.map((c, i) => (
            <motion.a
              key={c.id}
              href="#new-arrivals"
              data-cursor="View"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden bg-ink",
                spanMap[c.span]
              )}
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/90" />

              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <span className="mb-2 translate-y-2 text-[10px] uppercase tracking-luxe text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {c.pieces}
                </span>
                <h3 className="font-cormorant text-3xl font-light text-cream md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-1 max-w-xs translate-y-2 text-sm text-cream/70 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                  {c.subtitle}
                </p>
              </div>

              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream opacity-0 transition-all duration-500 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
