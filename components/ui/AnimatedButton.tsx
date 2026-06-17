"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "light";
  className?: string;
  magnetic?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  magnetic = true,
}: AnimatedButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.3;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const variants: Record<string, string> = {
    solid:
      "bg-ink text-cream hover:text-ink before:bg-gold",
    outline:
      "border border-ink/30 text-ink hover:text-cream before:bg-ink",
    light:
      "border border-cream/40 text-cream hover:text-ink before:bg-cream",
  };

  const inner = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  const baseClass = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors duration-500",
    "before:absolute before:inset-0 before:-z-0 before:scale-x-0 before:rounded-full before:transition-transform before:duration-500 before:[transform-origin:left] hover:before:scale-x-100 hover:before:[transform-origin:left]",
    variants[variant],
    className
  );

  const motionProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring" as const, stiffness: 250, damping: 18 },
  };

  if (href) {
    return (
      <motion.a href={href} className={baseClass} {...motionProps}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={baseClass} {...motionProps}>
      {inner}
    </motion.button>
  );
}
