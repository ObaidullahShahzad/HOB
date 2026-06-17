"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: ReactNode[];
  speed?: number; // seconds per loop
  className?: string;
  separator?: ReactNode;
  reverse?: boolean;
}

export default function Marquee({
  items,
  speed = 30,
  className,
  separator = <span className="mx-6 text-gold">✦</span>,
  reverse = false,
}: MarqueeProps) {
  const Row = () => (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          {item}
          {separator}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className="flex min-w-full shrink-0 animate-[marquee_var(--dur)_linear_infinite] items-center group-hover:[animation-play-state:paused]"
        style={
          {
            "--dur": `${speed}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <Row />
        <Row />
      </div>
      <div
        className="flex min-w-full shrink-0 animate-[marquee_var(--dur)_linear_infinite] items-center group-hover:[animation-play-state:paused]"
        style={
          {
            "--dur": `${speed}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
        aria-hidden
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}
