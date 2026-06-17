"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
} as const;

interface RevealTextProps {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  /** stagger words instead of the default fade-up of whole line */
  splitWords?: boolean;
}

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: "115%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function RevealText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  splitWords = true,
}: RevealTextProps) {
  const MotionTag = motionTags[Tag];

  if (!splitWords) {
    return (
      <span className="block overflow-hidden">
        <motion.span
          initial={{ y: "115%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
          className={cn("block", className)}
        >
          {text}
        </motion.span>
      </span>
    );
  }

  return (
    <MotionTag
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("inline-flex flex-wrap", className)}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} className="mr-[0.25em] overflow-hidden py-[0.05em]">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
