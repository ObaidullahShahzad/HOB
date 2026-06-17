"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const t = setTimeout(() => setDone(true), reduce ? 200 : 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-[10px] uppercase tracking-luxe text-gold"
            >
              Est. 1972 · Maison de Couture
            </motion.p>
          </div>

          <div className="mt-4 overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="font-cormorant text-5xl font-light tracking-tight text-cream md:text-7xl"
            >
              HOUSE OF BINA
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-8 h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent md:w-72"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
