"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "@/components/ui/RevealText";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function StoryBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section id="story" ref={ref} className="bg-ink text-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[60vh] overflow-hidden lg:h-[90vh]">
          <motion.div style={{ y: imgY, scale }} className="absolute inset-[-12%]">
            <Image
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1400&q=85"
              alt="House of Bina atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-ink/15" />
        </div>

        {/* Copy */}
        <div className="flex items-center px-7 py-20 md:px-16 lg:px-24">
          <div className="max-w-lg">
            <p className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-luxe text-gold">
              <span className="h-px w-10 bg-gold" />
              The Philosophy
            </p>

            <RevealText
              as="h2"
              text="Where memory meets the modern silhouette."
              className="font-cormorant text-4xl font-light leading-[1.05] md:text-6xl"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 text-[15px] leading-relaxed text-cream/70"
            >
              Every House of Bina piece begins as an archive — a half-remembered
              gesture from another era, redrawn for the woman of today. We honour
              the slow craft of couture: hand-finished seams, naturally dyed
              cloth, and silhouettes designed to be worn for a lifetime, then
              passed on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10"
            >
              <AnimatedButton href="#brand-story" variant="light">
                Discover the House
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
