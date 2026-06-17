"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-section text-cream">
      {/* soft glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-luxe relative">
        <SectionHeading
          align="center"
          light
          eyebrow="In Their Words"
          title="Beloved by Connoisseurs"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark flex flex-col gap-6 rounded-sm border border-cream/10 p-8"
            >
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="font-cormorant text-2xl font-light leading-relaxed text-cream/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-cormorant text-lg text-cream">{t.author}</p>
                <p className="text-[11px] uppercase tracking-luxe text-gold">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
