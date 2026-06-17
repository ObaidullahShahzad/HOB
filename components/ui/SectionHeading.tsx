"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import RevealText from "./RevealText";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gold" />
          <span
            className={cn(
              "text-[11px] uppercase tracking-luxe",
              light ? "text-gold" : "text-accent"
            )}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}

      <RevealText
        as="h2"
        text={title}
        className={cn(
          "text-balance font-cormorant text-4xl font-light leading-[1.05] md:text-6xl",
          light ? "text-cream" : "text-ink"
        )}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={cn(
            "max-w-xl text-[15px] leading-relaxed",
            light ? "text-cream/70" : "text-ink-soft/75"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
