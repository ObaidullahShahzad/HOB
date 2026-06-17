"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
}

export default function Counter({ to, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v).toLocaleString() + suffix;
      }
    });
  }, [spring, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
