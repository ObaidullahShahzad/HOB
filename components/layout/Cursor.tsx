"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-luxe-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor], input, textarea"
      ) as HTMLElement | null;
      setHovering(!!interactive);
      setLabel(interactive?.dataset.cursor ?? "");
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-luxe-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full bg-accent text-[10px] font-medium uppercase tracking-luxe text-vintage mix-blend-difference"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: label ? 84 : hovering ? 56 : 10,
          height: label ? 84 : hovering ? 56 : 10,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        {label && <span className="text-center leading-none">{label}</span>}
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-gold"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
