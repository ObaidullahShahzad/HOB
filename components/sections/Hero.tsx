"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  const reveal = {
    hidden: { y: "120%" },
    show: (i: number) => ({
      y: "0%",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 2.4 + i * 0.12,
      },
    }),
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Background image with scroll zoom */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=85"
          alt="House of Bina editorial campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="container-luxe relative flex h-full flex-col justify-end pb-24 md:justify-center md:pb-0"
      >
        <div className="max-w-4xl">
          <div className="overflow-hidden">
            <motion.p
              custom={0}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-luxe text-gold"
            >
              <span className="h-px w-10 bg-gold" />
              Spring / Summer 2026
            </motion.p>
          </div>

          <h1 className="font-cormorant font-light leading-[0.92] text-cream">
            <span className="block overflow-hidden">
              <motion.span
                custom={1}
                variants={reveal}
                initial="hidden"
                animate="show"
                className="block text-[18vw] tracking-tight md:text-[10vw]"
              >
                HOUSE OF
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={2}
                variants={reveal}
                initial="hidden"
                animate="show"
                className="block text-gradient-gold text-[18vw] italic tracking-tight md:text-[10vw]"
              >
                BINA
              </motion.span>
            </span>
          </h1>

          <div className="mt-6 overflow-hidden">
            <motion.p
              custom={3}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="max-w-md font-cormorant text-2xl font-light text-cream/80 md:text-3xl"
            >
              Timeless Pieces. Modern Heritage.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <AnimatedButton href="#collections" variant="light" data-cursor="Shop">
              Shop Collection
            </AnimatedButton>
            <AnimatedButton href="#brand-story" variant="light">
              Explore Story
            </AnimatedButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 md:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
