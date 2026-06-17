"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "@/components/ui/RevealText";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CampaignSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="campaign"
      ref={ref}
      className="relative flex h-[110vh] items-center justify-center overflow-hidden bg-ink text-cream"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85"
          alt="The Heritage Campaign"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="container-luxe relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-[11px] uppercase tracking-luxe text-gold"
        >
          The Heritage Campaign · SS26
        </motion.p>

        <RevealText
          as="h2"
          text="An Ode to the Eternal Wardrobe"
          className="mx-auto max-w-4xl justify-center text-balance font-cormorant text-5xl font-light leading-[1] md:text-8xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-cream/75"
        >
          Photographed across the marble halls of Lahore&rsquo;s old city, our
          newest campaign is a meditation on light, cloth, and the women who
          carry history forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <AnimatedButton href="#new-arrivals" variant="light" data-cursor="Watch">
            Experience the Film
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
