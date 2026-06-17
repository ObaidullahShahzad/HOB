"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "@/components/ui/RevealText";
import Counter from "@/components/ui/Counter";

const timeline = [
  { year: "1972", title: "The First Stitch", text: "Bina Rahman opens a single atelier with one promise — to make beauty that lasts." },
  { year: "1989", title: "A House Is Born", text: "The maison expands into ready-to-wear, defining a new vintage-modern language." },
  { year: "2008", title: "Heritage Revived", text: "The archive collection reintroduces hand-block dyeing and naturally spun silks." },
  { year: "2026", title: "Modern Heritage", text: "A global house, still guided by the same hands, the same patience, the same soul." },
];

const stats = [
  { value: 54, suffix: "+", label: "Years of Craft" },
  { value: 120, suffix: "K", label: "Pieces Hand-Finished" },
  { value: 38, suffix: "", label: "Ateliers Worldwide" },
  { value: 100, suffix: "%", label: "Natural Materials" },
];

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="brand-story" ref={ref} className="bg-vintage py-section">
      <div className="container-luxe">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-[11px] uppercase tracking-luxe text-accent">
            Our Heritage
          </p>
          <RevealText
            as="h2"
            text="A house built on patience, memory, and craft."
            className="justify-center text-balance font-cormorant text-4xl font-light leading-[1.05] text-ink md:text-6xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Editorial image */}
          <div className="relative h-[70vh] overflow-hidden lg:sticky lg:top-28 lg:h-[80vh]">
            <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85"
                alt="The Bina atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute bottom-6 left-6 right-6 glass-dark p-6 text-cream">
              <p className="font-cormorant text-2xl italic">
                &ldquo;We do not chase the season. We outlast it.&rdquo;
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-luxe text-gold">
                — Bina Rahman, Founder
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[6px] top-0 h-full w-px -translate-x-1/2 bg-accent/20" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[6px] top-0 w-px -translate-x-1/2 bg-gradient-to-b from-gold to-accent"
            />

            <div className="flex flex-col gap-14">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="relative pl-12"
                >
                  <span className="absolute left-[6px] top-2.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-gold bg-vintage" />
                  <p className="font-cormorant text-5xl font-light text-gradient-gold">
                    {t.year}
                  </p>
                  <h3 className="mt-2 font-cormorant text-2xl text-ink">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft/70">
                    {t.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-accent/15 pt-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-cormorant text-5xl font-light text-ink md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-luxe text-accent">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
